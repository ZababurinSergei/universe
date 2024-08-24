import * as helia from "helia";
import {unixfs} from "@helia/unixfs";
import {CID} from "multiformats/cid";
import {multiaddr} from "@multiformats/multiaddr";
// import { mdns } from '@libp2p/mdns'
// import { createLibp2p } from 'libp2p'
// import {circuitRelayTransport} from "@libp2p/circuit-relay-v2";
// import {webRTC, webRTCDirect} from "@libp2p/webrtc";
// import {webTransport} from "@libp2p/webtransport";
// import {webSockets} from "@libp2p/websockets";
import {webRTCStar} from "@libp2p/webrtc-star";
// import * as filters from "@libp2p/websockets/filters";
import {createFromProtobuf} from '@libp2p/peer-id-factory';
import {noise} from '@chainsafe/libp2p-noise'
import {yamux} from '@chainsafe/libp2p-yamux'
import {mplex} from '@libp2p/mplex'
// import { bootstrap } from '@libp2p/bootstrap'
// import { identify } from '@libp2p/identify'
// import { kadDHT, removePublicAddressesMapper } from '@libp2p/kad-dht'
// import { autoNAT } from '@libp2p/autonat'
import {FaultTolerance} from '@libp2p/interface-transport'
import init from './PixelPlanets/out.mjs'

const peerList = new Set();
const rtcStar = "/dns4/webrtc-star.onrender.com/tcp/443/wss/p2p-webrtc-star"
// const rtcStar =  '/ip4/127.0.0.1/tcp/9090/ws/p2p-webrtc-star/'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const options = init()

const DOM = {
    chat: (type) => {
        const root = document.querySelector('.chat')
        switch (type) {
            case 'refresh':
                return root.querySelector('.refresh')
            case 'send':
                return root.querySelector('button.send')
            case 'input':
                return root.querySelector('textarea')
            case 'select':
            default:
                return root.querySelector('select')

        }
    },
    disconnect: () => {
        return document.querySelector('.disconnect')
    },
    discovery: (type) => {
        const root = document.querySelector('.discovery')
        switch (type) {
            case 'refresh':
                return root.querySelector('.refresh')
            default:
                return root.querySelector('ul')
        }
    },
    planet: () => {
        const root = document.querySelector('.planet')
        return root.querySelector('span')
    },
    peerId: () => {
        const root = document.querySelector('.peerId')
        return root.querySelector('span')
    },
    ma: () => {
        const root = document.querySelector('.ma')
        return root.querySelector('ul')
    }
}

const COLORS = {
    active: '#357edd',
    success: '#0cb892',
    error: '#ea5037'
}

let obectName = !urlParams.has('planet') ? 'sun' : urlParams.get('planet')
let namespace = {}

switch (obectName) {
    case 'moon':
        namespace.PeerId = './peerId_moon.proto'
        namespace.planet = 'moon'
        DOM.planet().textContent = 'Луна'
        options.change(options.planet[0])
        break
    case 'uranus':
        namespace.PeerId = './peerId_uranus.proto'
        namespace.planet = 'uranus'
        DOM.planet().textContent = 'Уран'
        options.change(options.planet[1])
        break
    case 'venus':
        namespace.PeerId = './peerId_venus.proto'
        namespace.planet = 'venus'
        DOM.planet().textContent = 'Уран'
        options.change(options.planet[6])
        break
    case 'jupiter':
        namespace.PeerId = './peerId_jupiter.proto'
        namespace.planet = 'jupiter'
        DOM.planet().textContent = 'Юпитер'
        options.change(options.planet[3])
        break
    case 'earth':
        namespace.PeerId = './peerId_earth.proto'
        namespace.planet = 'earth'
        DOM.planet().textContent = 'Земля'
        options.change(options.planet[8])
        break
    default:
        namespace.PeerId = './peerId_sun.proto'
        namespace.planet = 'sun'
        DOM.planet().textContent = 'Солнце'
        break
}

let peerId = await fetch(namespace.PeerId)

if (peerId.status === 200) {
    peerId = await peerId.blob()
    peerId = await createFromProtobuf(new Uint8Array(await peerId.arrayBuffer()))
    const rsWithAi = rs => {
        if (!(Symbol.asyncIterator in rs)) rs[Symbol.asyncIterator] = async function* () {
            const reader = rs.getReader();
            try {
                while (true) {
                    const {value, done} = await reader.read();
                    if (done) return;
                    yield value;
                }
            } finally {
                reader.releaseLock();
            }
        };
        return rs;
    };

// https://github.com/ipfs/helia/blob/main/packages/helia/src/utils/bootstrappers.ts
    const bootstrapConfig = {
        list: [
            '/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN',
            '/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa',
            '/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb',
            '/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt',
            '/ip4/104.131.131.82/tcp/4001/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ',
        ]
    };

    const star = webRTCStar();

    const node = await helia.createHelia({
        libp2p: {
            peerId,
            // https://github.com/ipfs/helia/blob/main/packages/helia/src/utils/libp2p-defaults.browser.ts#L27
            addresses: {
                listen: [
                    "/webrtc",
                    "/wss",
                    "/ws",
                    rtcStar // see
                ],
            },
            transports: [
                // webRTC(),
                // webRTCDirect(),
                // webTransport(),
                // https://github.com/libp2p/js-libp2p-websockets#libp2p-usage-example
                // webSockets({filter: filters.all}),
                // circuitRelayTransport({discoverRelays: 1}),
                star.transport,
            ],
            peerDiscovery: [
                // bootstrap(bootstrapConfig),
                star.discovery
            ],
            transportManager: {
                faultTolerance: FaultTolerance.NO_FATAL
            },
            connectionManager: {
                autoDialInterval: 1000 //(default: 5000)
            },
            // addressManager: {
            //     autoDial: true
            // },
            // connectionManager: {
            // autoDial: true,
            // dialTimeout: 1000,
            // maxConnections: 20,
            // minConnections: 0
            // },
            // connectionEncryption: [noise()],
            // streamMuxers: [yamux(), mplex()],
            // https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#configuring-connection-gater
            connectionGater: {
                /**
                 * denyDialMultiaddr tests whether we're permitted to Dial the
                 * specified peer.
                 *
                 * This is called by the dialer.connectToPeer implementation before
                 * dialling a peer.
                 *
                 * Return true to prevent dialing the passed peer.
                 */
                denyDialPeer: (peerId) => {
                    // console.log('ddddddddddd denyDialPeer dddddddddddddddd', peerId)
                    return false
                },
                /**
                 * denyDialMultiaddr tests whether we're permitted to dial the specified
                 * multiaddr for the given peer.
                 *
                 * This is called by the dialer.connectToPeer implementation after it has
                 * resolved the peer's addrs, and prior to dialling each.
                 *
                 * Return true to prevent dialing the passed peer on the passed multiaddr.
                 */
                denyDialMultiaddr: async (peerId) => {

                    return false
                },
                /**
                 * denyInboundConnection tests whether an incipient inbound connection is allowed.
                 *
                 * This is called by the upgrader, or by the transport directly (e.g. QUIC,
                 * Bluetooth), straight after it has accepted a connection from its socket.
                 *
                 * Return true to deny the incoming passed connection.
                 */
                denyInboundConnection: (maConn) => {
                    // console.log('dddddddddddddd denyInboundConnection dddddddddddddddddd', maConn)
                    return false
                },
                /**
                 * denyOutboundConnection tests whether an incipient outbound connection is allowed.
                 *
                 * This is called by the upgrader, or by the transport directly (e.g. QUIC,
                 * Bluetooth), straight after it has created a connection with its socket.
                 *
                 * Return true to deny the incoming passed connection.
                 */
                denyOutboundConnection: (peerId, maConn) => {
                    // console.log('------------------------ denyOutboundConnection --------------------------------', peerId)
                    return false
                },

                /**
                 * denyInboundEncryptedConnection tests whether a given connection, now encrypted,
                 * is allowed.
                 *
                 * This is called by the upgrader, after it has performed the security
                 * handshake, and before it negotiates the muxer, or by the directly by the
                 * transport, at the exact same checkpoint.
                 *
                 * Return true to deny the passed secured connection.
                 */
                denyInboundEncryptedConnection: (peerId, maConn) => {
                    // console.log('@@@@@@@@@@@@@@@@@@ denyInboundEncryptedConnection @@@@@@@@@@@@@@@@@@@', peerId)
                    return false
                },

                /**
                 * denyOutboundEncryptedConnection tests whether a given connection, now encrypted,
                 * is allowed.
                 *
                 * This is called by the upgrader, after it has performed the security
                 * handshake, and before it negotiates the muxer, or by the directly by the
                 * transport, at the exact same checkpoint.
                 *
                 * Return true to deny the passed secured connection.
                 */
                denyOutboundEncryptedConnection: (peerId, maConn) => {
                    // console.log('############## denyOutboundEncryptedConnection #######################', peerId)
                    return false
                },

                /**
                 * denyInboundUpgradedConnection tests whether a fully capable connection is allowed.
                 *
                 * This is called after encryption has been negotiated and the connection has been
                 * multiplexed, if a multiplexer is configured.
                 *
                 * Return true to deny the passed upgraded connection.
                 */
                denyInboundUpgradedConnection: (peerId, maConn) => {
                    // console.log('$$$$$$$$$$$$$$$$$$$ denyInboundUpgradedConnection $$$$$$$$$$$$$$$$$$$$$$$$$$', peerId)
                    return false
                },

                /**
                 * denyOutboundUpgradedConnection tests whether a fully capable connection is allowed.
                 *
                 * This is called after encryption has been negotiated and the connection has been
                 * multiplexed, if a multiplexer is configured.
                 *
                 * Return true to deny the passed upgraded connection.
                 */
                denyOutboundUpgradedConnection: (peerId, maConn) => {
                    // console.log('^^^^^^^^^^^^^^ denyOutboundUpgradedConnection ^^^^^^^^^^^^^^^^^^^^^', peerId)
                    return false
                },

                /**
                 * Used by the address book to filter passed addresses.
                 *
                 * Return true to allow storing the passed multiaddr for the passed peer.
                 */
                filterMultiaddrForPeer: (peerId, multiaddr) => {
                    // console.log('#################### filterMultiaddrForPeer #####################', peerId)
                    return true
                }
            }
        }
    }); // tcp network, stored on memory (not use files)

    console.log('dddddddddddddddddddddddddddddddddddddddd', node.libp2p.transportManager)
    const nodeFs = unixfs(node);

    while (node.libp2p.getMultiaddrs().length === 0) await new Promise(f => setTimeout(f, 500));

    DOM.peerId().textContent = node.libp2p.peerId.toString()
    let ma = DOM.ma()

    // console.log('ssssssssssssssssssssss', node.libp2p.peerRouting)

    for (let item of node.libp2p.getMultiaddrs()) {
        ma.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    }
    // console.log('--------------------------------', node.libp2p)
    console.log("MA: ", node.libp2p.getMultiaddrs().map(ma => `${ma}`));

    //---------------------------------------------------------------------------
    node.libp2p.addEventListener('connection:open', (event) => {
        // const peerInfo = evt.detail

        console.log('[[[[[[[ LISTENER ]]]]]]] connection:open', {
            id: event.detail.id,
            remotePeer: event.detail.remotePeer.toString(),
            remoteAddr: event.detail.remoteAddr.toString(),
            detail: event.detail
        })
    })

    node.libp2p.addEventListener('connection:close', (event) => {
        // const peerInfo = evt.detail
        console.log('[[[[[[[ LISTENER ]]]]]]] connection:close', event.detail)
    })

    node.libp2p.addEventListener('connection:prune', (event) => {
        // const peerInfo = evt.detail
        console.log('[[[[[[[ LISTENER ]]]]]]] connection:prune', event.detail)
    })

    node.libp2p.addEventListener('peer:connect', (event) => {
        // peerList.add(peerId.toString())
        // for (const item of peerList) {
        //     const discovery = DOM.discovery()
        //     discovery.innerHTML = ''
        //     discovery.insertAdjacentHTML('beforeend', `<li>${peerId.toString()}</li>`)
        // }
        DOM.discovery('refresh').click()
        console.log('[[[[[[[ LISTENER ]]]]]]] peer:connect', event.detail.toString())
    })

    node.libp2p.addEventListener('peer:disconnect', (event) => {
        peerList.delete(event.detail.toString())
        DOM.discovery('refresh').click()
        // const peerId = event.detail?.toString()
        // if(peerList.has(peerId)) {
        //     peerList.delete(peerId);
        // }
        // for (const item of peerList) {
        //     const dis     request.then(data => {    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', bufs.slice().slice(), bufs)  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', bufs.slice().slice(), bufs)
        //     console.log('@@@@@@@@@@@@@@@@@@', data)
        //     const input  = DOM.chcovery = DOM.discovery()
        //     discovery.innerHTML = ''
        //     discovery.insertAdjacentHTML('beforeend', `<li>${peerId.toString()}</li>`)
        // }
        // const peerInfo = event.detail
        console.log('[[[[[[[ LISTENER ]]]]]]] peer:disconnect', {
            detail: event.detail,
            string: event.detail.toString()
        })
    })

    node.libp2p.addEventListener('peer:discovery', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] peer:discovery', {
            id: event.detail.id.toString(),
            detail: event.detail
        })
    })

    node.libp2p.addEventListener('peer:identify', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] peer:identify', {
            detail: event.detail,
            observedAddr: event.detail.observedAddr,
            listenAddrs: event.detail.listenAddrs
        })
    })

    node.libp2p.addEventListener('peer:update', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] peer:update', {
            peer: {
                self: event.detail.peer,
                protocols: event.detail.peer.protocols,
                // protocols: event.detail.peer.protocols
            },
            previous: {
                self: event.detail.previous,
                protocols: event.detail.previous?.protocols
                // protocols: event.detail.previous.protocols
            }
        })
    })

    node.libp2p.addEventListener('self:peer:update', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] self:peer:update', event.detail)
    })

    node.libp2p.addEventListener('start', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] start', event.detail)
    })

    node.libp2p.addEventListener('stop', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] stop', event.detail)
    })

    node.libp2p.addEventListener('transport:close', (event) => {
        // const peerInfo = evt.detail
        console.log('[[[[[[[ LISTENER ]]]]]]] transport:close', event.detail)
    })

    node.libp2p.addEventListener('transport:listening', (event) => {
        // const peerInfo = evt.detail
        console.log('[[[[[[[ LISTENER ]]]]]]] transport:listening', event.detail)
    })


    const proto = "/my-echo/0.1";

    const handler = async ({connection, stream}) => {
        let request = {}
        for await (const bufs of stream.source) {
            request = new TextDecoder().decode(bufs.slice().slice());
        }

        console.log('------- RESPONSE -------', request)

        // stream.sink(async function* () {
        //     for await (const bufs of stream.source) {
        //         yield bufs.slice().slice();
        //     }
        // }());
    };

    // const handler = async ({connection, stream}) => {
    //    stream.sink(async function* () {
    //        for await (const bufs of stream.source) {
    //             yield bufs.slice().slice();
    //         }
    //     }());
    //
    //    let request = {}
    //     for await (const bufs of stream.source) {
    //         request = new TextDecoder().decode(bufs.slice().slice());
    //     }
    //    console.log('------- RESPONSE -------',request)
    // };

    await node.libp2p.handle(proto, handler);

    const send = async (ma, msg) => {
        if (typeof ma === "string") ma = multiaddr(ma);
        const stream = await node.libp2p.dialProtocol(ma, proto);
        stream.sink(async function* () {
            yield (new TextEncoder().encode(msg));
        }());

        for await (const bufs of stream.source) {
            return new TextDecoder().decode(bufs.slice().slice());
        }
    };

    const discovery = DOM.discovery()
    const discoveryRefresh = DOM.discovery('refresh')
    const select = DOM.chat('select')
    const refresh = DOM.chat('refresh')
    const buttonSend = DOM.chat('send')

    globalThis.node = node

    discoveryRefresh.addEventListener('click', async (event) => {
        discovery.innerHTML = ''

        const peers = node.libp2p.getPeers()
        const connections = node.libp2p.getConnections()
        let count = 0

        for (let connect of connections) {
            peerList.add(connect.remotePeer.toString())
            count++
        }

        for (const item of peerList) {
            discovery.insertAdjacentHTML('beforeend', `<li>
                <p>${item}</p>
                <button class="delete" data-peer-id="${item}" onclick="((button) => {
                    const connections = globalThis.node.libp2p.getConnections()
                    const connect = connections.find(item => item.remotePeer.toString() === button.dataset.peerId)
                    connect.close()
                })(this)">
                R
                </button>
            </li>`)
        }

        count = 0
        refresh.click()
    })

    window.addEventListener("beforeunload", (event) => {
        // Отмените событие, как указано в стандарте.
        event.preventDefault();
        const connections = globalThis.node.libp2p.getConnections()
        for(let connect of connections) {
            connect.close()
        }
        // const connect = connections.find(item => item.remotePeer.toString() === button.dataset.peerId)

        // Chrome требует установки возвратного значения.
        event.returnValue = "";
    });

    buttonSend.addEventListener('click', async (event) => {
        let peer = select.options[select.selectedIndex].value;

        const connections = globalThis.node.libp2p.getConnections()
        const connect = connections.find(item => item.remotePeer.toString() === peer)

        // console.log('------------ connections --------------', connections)
        if (connect) {
            // globalThis.ctx.maStar(peer)
            const res = await send(connect.remotePeer, 'hello')
            console.log('---------- REQUEST ----------', connect.remotePeer.toString(), res)
        }
    })

    refresh.addEventListener('click', (event) => {
        select.innerHTML = ''
        for (const item of peerList) {
            select.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`)
        }
    })

    // select.addEventListener('click', (event) => {
    //     console.log('##############################')
    //     select.innerHTML = ''
    //
    //     for (const item of peerList) {
    //         select.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`)
    //     }
    // })

    // let timerId = setInterval(() => {
    //     discovery.innerHTML = ''
    //
    //     const peers = node.libp2p.getPeers()
    //     const connections = node.libp2p.getConnections()
    //     let count = 0
    //
    //     for (let connect of connections) {
    //         peerList.add(connect.remotePeer.toString())
    //         count++
    //     }
    //
    //     for (const item of peerList) {
    //         discovery.insertAdjacentHTML('beforeend', `<li>
    //             <p>${item}</p>
    //             <button class="delete" data-peer-id="${item}" onclick="((button) => {
    //                 const connections = globalThis.node.libp2p.getConnections()
    //                 const connect = connections.find(item => item.remotePeer.toString() === button.dataset.peerId)
    //                 connect.close()
    //             })(this)">
    //             R
    //             </button>
    //         </li>`)
    //     }
    //     count = 0
    // }, 5000);

// for web console
    globalThis.ctx = {
        maStar: localId => multiaddr(`${rtcStar}/p2p/${localId}`),
        maP2p: localId => multiaddr(`/p2p/${localId}`),
        cidHw: cid => CID.parse(cid), // served on helia-wrtc-star.mjs
        send,
    };


// const maPeer = await window.ctx.maStar('12D3KooWH6yCNbjjEeJYEmSc2kpM7Tk4XnymdsDozFeBH5zwunRb')
// console.log('MA PEER', maPeer)
// const res = await send('/dns4/js-libp2p-webrtc-star-yeub.onrender.com/tcp/443/wss/p2p-webrtc-star/p2p/12D3KooWA2JENeezGZhKD3fwpHUSs5AUf1VjS7qvsHhd7EjAeGG9', 'hello')
// console.log('window.ctx: ',  res)

// example data
// const blob = new Blob([new TextEncoder().encode("Hello World!")], {type: "text/plain;charset=utf-8"});
// console.log("[Blob]", blob);

// publish blob as CID with addByteStream()
// const cid = await ctx.nodefs.addByteStream(rsWithAi(blob.stream()));
//const cid = await ctx.nodefs.addBytes(new Uint8Array(await blob.arrayBuffer()));
// console.log("[unixfs.addByteStream]", cid);
// const cidStr = cid.toString();
// const cidAlt = CID.parse(cidStr);
// const ret1 = await ctx.node.pins.add(cidAlt); //NOTE: pins not accept CID string
// console.log("[pins.add]", ret1);


    /*
    // example data
    const blob = new Blob([new TextEncoder().encode("Hello World!")], {type: "text/plain;charset=utf-8"});
    console.log("[Blob]", blob);

    // publish blob as CID with addByteStream()
    const cid = await ctx.nodefs.addByteStream(rsWithAi(blob.stream()));
    //const cid = await ctx.nodefs.addBytes(new Uint8Array(await blob.arrayBuffer()));
    console.log("[unixfs.addByteStream]", cid);
    const cidStr = cid.toString();
    const cidAlt = CID.parse(cidStr);
    const ret1 = await ctx.node.pins.add(cidAlt); //NOTE: pins not accept CID string
    console.log("[pins.add]", ret1);

    // NOTE: helia's pins needs stored blocks in blockstore (e.g. cannnot pin before stat()/ls()/cat())
    const stat = await ctx.nodefs.stat(cidStr);
    console.log("[unixfs.stat]", stat);

    // get CID object from CID string with ls() from @helia/unixfs
    for await (const entry of ctx.nodefs.ls(cidStr)) console.log("[unixfs.ls]", entry.cid);

    // retrieve data with cat(cid or cid-string)
    const u8as = [];
    for await (const u8a of ctx.nodefs.cat(cidStr)) {
      console.log("[unixfs.cat]", u8a);
      u8as.push(u8a.slice());
    }
    console.log("[Blob.text]", await (new Blob(u8as).text()));
    */

// stop only helia nodes; unixfs is just a wrapper
//console.log("[helia.stop]", await node.stop());

} else {
    console.error('Неизвестная ошибка')
}

