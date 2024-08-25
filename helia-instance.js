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
import {lpStream, decode, encode} from 'it-length-prefixed-stream'
import { byteStream } from 'it-byte-stream'
import * as varint from 'uint8-varint'
import { Uint8ArrayList } from 'uint8arraylist'
// import * as lp from 'it-length-prefixed-stream'

const rtcStar = "/dns4/webrtc-star.onrender.com/tcp/443/wss/p2p-webrtc-star"
// const rtcStar =  '/ip4/127.0.0.1/tcp/9090/ws/p2p-webrtc-star/'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// const dht = new Map()
export const createNode = async (DOM, type, peerId, privatePeerId, privateNode, publicPeerId) => {
    const peerList = new Set();

    // dht.set(privatePeerId.toString(), peerId.toString())
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

    const configNode = {
        libp2p: {
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
                denyDialPeer: (currentPeerId) => {
                    let connections = []

                    if(privateNode) {
                        connections = privateNode.libp2p.getConnections()
                    }

                    for(let connect of connections) {
                        if(connect.remotePeer.toString() === currentPeerId.toString()) {
                            return  true
                        }
                    }

                    if(type === 'private' && publicPeerId.includes(currentPeerId.toString())) {
                        return true
                    }

                    if(type === 'public' && !publicPeerId.includes(currentPeerId.toString())) {
                        return true
                    }

                    // if(type === 'private' && !dht.has(currentPeerId.toString())) {
                    //     return true
                    // }
                    // console.log('--------------------------------------------------------------------------------------', type, dht.has(currentPeerId.toString()))
                    // console.log('ddddddddddd denyDialPeer dddddddddddddddd', type, currentPeerId.toString())
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
                denyDialMultiaddr: async (currentPeerId) => {
                    // console.log('------------------- peerId ----------------------', currentPeerId.toString())
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
                    // console.log('dddddddddddddd denyInboundConnection dddddddddddddddddd', type, maConn)
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
                denyOutboundConnection: (currentPeerId, maConn) => {
                    // let connections = []
                    // if(privateNode) {
                    //     connections = privateNode.libp2p.getConnections()
                    // }
                    // for(let connect of connections) {
                    //     if(connect.remotePeer.toString() === currentPeerId.toString()) {
                    //         return  true
                    //     }
                    // }
                    // console.log('------------------------ denyOutboundConnection --------------------------------',type, connections, currentPeerId.toString())
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
                denyInboundEncryptedConnection: (currentPeerId, maConn) => {
                    // if(type = 'private' && currentPeerId.toString() === peerId.toString()) {
                    //     return true
                    // } else {
                        return false
                        // console.log('@@@@@@@@@@@@@@@@@@ denyInboundEncryptedConnection @@@@@@@@@@@@@@@@@@@',type,  peerId, currentPeerId.toString())
                    // }
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
                denyOutboundEncryptedConnection: (currentPeerId, maConn) => {
                    // console.log('############## denyOutboundEncryptedConnection #######################',type, currentPeerId.toString())
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
                denyInboundUpgradedConnection: (currentPeerId, maConn) => {
                    // if(type === 'public' && !publicPeerId.includes(currentPeerId.toString())) {
                    //     return  true
                    // }

                    // console.log('$$$$$$$$$$$$$$$$$$$ denyInboundUpgradedConnection $$$$$$$$$$$$$$$$$$$$$$$$$$',type, currentPeerId.toString())
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
                denyOutboundUpgradedConnection: (currentPeerId, maConn) => {
                    // console.log('^^^^^^^^^^^^^^ denyOutboundUpgradedConnection ^^^^^^^^^^^^^^^^^^^^^', type, currentPeerId.toString())
                    return false
                },

                /**
                 * Used by the address book to filter passed addresses.
                 *
                 * Return true to allow storing the passed multiaddr for the passed peer.
                 */
                filterMultiaddrForPeer: async (currentPeerId, multiaddr) => {
                    if(    type === 'private' && currentPeerId.toString() === peerId.toString()
                        || type === 'private' && currentPeerId.toString() === privatePeerId.toString()
                        || type === 'public' && currentPeerId.toString() === privatePeerId.toString()
                        || type === 'public' && currentPeerId.toString() === peerId.toString()) {
                        return false
                    } else {
                        // if(peerId.toString() === currentPeerId.toString()) {
                        // console.log('#################### filterMultiaddrForPeer #####################',type, {
                        //     privatePeerId: privatePeerId.toString(),
                        //     publicPeerId: peerId.toString(),
                        //     currentPeerId: currentPeerId.toString()
                        // })
                        // return false
                        // } else {
                        return true
                        // }
                        // const res = await send(`${multiaddr.toString()}/${peerId.toString()}`, '!!!!!!!!!!!!!!!')
                    }
                }
            }
        }
    }

    if(type === 'public') {
        configNode.libp2p.peerId = peerId
    }

    if(type === 'private') {
        configNode.libp2p.peerId = privatePeerId
    }

    const node = await helia.createHelia(configNode); // tcp network, stored on memory (not use files)

    const nodeFs = unixfs(node);

    while (node.libp2p.getMultiaddrs().length === 0) await new Promise(f => setTimeout(f, 500));

    DOM.info(type).textContent = node.libp2p.peerId.toString()
    let ma = DOM.ma(type)

    // console.log('ssssssssssssssssssssss', node.libp2p.peerRouting)

    for (let item of node.libp2p.getMultiaddrs()) {
        ma.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    }
    // console.log('--------------------------------', node.libp2p)
    // console.log("MA: ", node.libp2p.getMultiaddrs().map(ma => `${ma}`));

    //---------------------------------------------------------------------------
    node.libp2p.addEventListener('connection:open', (event) => {
        // const peerInfo = evt.detail
        // console.log('[[[[[[[ LISTENER ]]]]]]] connection:open', {
        //     id: event.detail.id,
        //     remotePeer: event.detail.remotePeer.toString(),
        //     remoteAddr: event.detail.remoteAddr.toString(),
        //     detail: event.detail.stat.status
        // })
    })

    node.libp2p.addEventListener('connection:close', (event) => {
        // const peerInfo = evt.detail
        // console.log('[[[[[[[ LISTENER ]]]]]]] connection:close', event.detail)
    })

    node.libp2p.addEventListener('connection:prune', (event) => {
        // const peerInfo = evt.detail
        // console.log('[[[[[[[ LISTENER ]]]]]]] connection:prune', event.detail)
    })

    node.libp2p.addEventListener('peer:connect', (event) => {
        // peerList.add(peerId.toString())
        // for (const item of peerList) {
        //     const discovery = DOM.discovery()
        //     discovery.innerHTML = ''
        //     discovery.insertAdjacentHTML('beforeend', `<li>${peerId.toString()}</li>`)
        // }
        DOM[type].discovery('refresh').click()
        // console.log('[[[[[[[ LISTENER ]]]]]]] peer:connect', event.detail.toString())
    })

    node.libp2p.addEventListener('peer:disconnect', (event) => {
        peerList.delete(event.detail.toString())
        DOM[type].discovery('refresh').click()
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
        // console.log('[[[[[[[ LISTENER ]]]]]]] peer:disconnect', {
        //     detail: event.detail,
        //     string: event.detail.toString()
        // })
    })

    node.libp2p.addEventListener('peer:discovery', (evt) => {
        // console.log('[[[[[[[ LISTENER ]]]]]]] peer:discovery', {
        //     id: event.detail.id.toString(),
        //     detail: event.detail
        // })
    })

    node.libp2p.addEventListener('peer:identify', (evt) => {
        // console.log('[[[[[[[ LISTENER ]]]]]]] peer:identify', {
        //     peerId: event.detail.peerId.toString(),
        //     observedAddr: event.detail.observedAddr.toString(),
        //     listenAddrs: event.detail.listenAddrs.toString()
        // })
    })

    node.libp2p.addEventListener('peer:update', (evt) => {
        // for(let item of event.detail.peer.addresses) {
        //     console.log('[[[[[[[ LISTENER ]]]]]]] peer:update CURRENT isCertified', item.isCertified)
        // }

        // if(event.detail.previous?.addresses) {
        //     for(let item of event.detail.previous.addresses) {
        //         console.log('[[[[[[[ LISTENER ]]]]]]] peer:update PREVIOUSE isCertified', item.isCertified)
        //     }
        // }

        // console.log('[[[[[[[ LISTENER ]]]]]]] peer:update', {
        //     peer: {
        //         self: event.detail.peer.addresses,
        //         protocols: event.detail.peer.protocols,
        //         // protocols: event.detail.peer.protocols
        //     },
        //     previous: {
        //         self: event.detail.previous,
        //         protocols: event.detail.previous?.protocols
        //         // protocols: event.detail.previous.protocols
        //     }
        // })
    })

    node.libp2p.addEventListener('self:peer:update', (event) => {
        if(event.detail.peer.addresses.length !== 0) {
            // console.log('[[[[[[[ LISTENER ]]]]]]] self:peer:update 2', event.detail.peer.id.toString(), event.detail.peer.addresses[0])
        }
    })

    node.libp2p.addEventListener('start', (evt) => {
        // console.log('[[[[[[[ LISTENER ]]]]]]] start', event.detail)
    })

    node.libp2p.addEventListener('stop', (evt) => {
        // console.log('[[[[[[[ LISTENER ]]]]]]] stop', event.detail)
    })

    node.libp2p.addEventListener('transport:close', (event) => {
        // const peerInfo = evt.detail
        // console.log('[[[[[[[ LISTENER ]]]]]]] transport:close', event.detail)
    })

    node.libp2p.addEventListener('transport:listening', (event) => {
        // const peerInfo = evt.detail
        // console.log('[[[[[[[ LISTENER ]]]]]]] transport:listening', event.detail)
    })


    const proto = "/my-echo/0.1";

    const incoming = DOM.chat('input')

    let p = 0
    const printSmbl = () => {
        let timeout = Math.round(Math.random() * 100);
        incoming.textContent = incoming.textContent + globalThis.message[p]

        p++;
        if (p < globalThis.message.length) {
            setTimeout(printSmbl, timeout);
        } else {
            p = 0
            clearTimeout(timeout)
            globalThis.message = ''
        }
    }

    const handler = async ({connection, stream}) => {
        console.log('INCOMING PEER_ID ', connection.remotePeer.toString())
        const lp = lpStream(stream)

        const res = await lp.read()

        const output = new TextDecoder().decode(res.subarray())

        globalThis.message = output

        printSmbl()
    };

    await node.libp2p.handle(proto, handler);

    const send = async (ma, msg) => {
        if (typeof ma === "string") ma = multiaddr(ma);

        const signal = AbortSignal.timeout(5000)

        const stream = await node.libp2p.dialProtocol(ma, proto, {
            signal
        });

        const lp = lpStream(stream)

        await lp.write(new TextEncoder().encode(msg))

        return msg
    };

    const discoveryRefresh = DOM[type].discovery('refresh')
    const select = DOM.chat('select')
    const refresh = DOM.chat('refresh')
    const buttonSend = DOM.chat('send')

    globalThis.node = node

    discoveryRefresh.addEventListener('click', async (event) => {
        const discovery = DOM[type].discovery()

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
        for (let connect of connections) {
            connect.close()
        }
        event.returnValue = "";
    });

    buttonSend.addEventListener('click', async (event) => {
        const outgoing = DOM.chat('output')
        let peer = select.options[select.selectedIndex].value;
        const connections = globalThis.node.libp2p.getConnections()
        const connect = connections.find(item => item.remotePeer.toString() === peer)

        console.log('------------ connections --------------', connections)
        if (connect) {
            const res = await send(connect.remotePeer, outgoing.value)
            console.log('---------- REQUEST ----------', connect.remotePeer.toString(), res)
        }
    })

    refresh.addEventListener('click', (event) => {
        select.innerHTML = ''
        for (const item of peerList) {
            select.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`)
        }
    })


    return node
}

