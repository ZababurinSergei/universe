import * as helia from "helia";
import {unixfs} from "@helia/unixfs";
import {CID} from "multiformats/cid";
import {multiaddr} from "@multiformats/multiaddr";
import {bootstrap} from "@libp2p/bootstrap";
import {circuitRelayTransport} from "libp2p/circuit-relay";
import {webRTC, webRTCDirect} from "@libp2p/webrtc";
import {webTransport} from "@libp2p/webtransport";
import {webSockets} from "@libp2p/websockets";
import {webRTCStar} from "@libp2p/webrtc-star";
import * as filters from "@libp2p/websockets/filters";
import {createFromProtobuf} from '@libp2p/peer-id-factory';
import init from './PixelPlanets/out.mjs'

const rtcStar = "/dns4/webrtc-star.onrender.com/tcp/443/wss/p2p-webrtc-star"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const options = init()

const DOM = {
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

// console.log('========== createFromProtobuf ===========', createFromProtobuf)
// debugger
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
            // https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#configuring-connection-gater
            connectionGater: {
                denyDialMultiaddr: async (...args) => false,
            },
        },
    }); // tcp network, stored on memory (not use files)

    // console.log('--------- node -----------', node.libp2p.peerId.toString())
    // debugger
    const nodeFs = unixfs(node);

    while (node.libp2p.getMultiaddrs().length === 0) await new Promise(f => setTimeout(f, 500));

    DOM.peerId().textContent = node.libp2p.peerId.toString()
    let ma = DOM.ma()

    for (let item of node.libp2p.getMultiaddrs()) {
        ma.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    }

    console.log("MA: ", node.libp2p.getMultiaddrs().map(ma => `${ma}`));

    const proto = "/my-echo/0.1";
    const handler = ({connection, stream}) => {
        console.log('###################################################')
        stream.sink(async function* () {
            for await (const bufs of stream.source) {
                yield bufs.slice().slice();
            }
        }());
    };

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

// for web console
    window.ctx = {
        helia,
        CID,
        multiaddr,
        node,
        nodeFs,
        maStar: localId => multiaddr(`${rtcStar}/p2p/${localId}`),
        maP2p: localId => multiaddr(`/p2p/${localId}`),
        cidHw: cid => CID.parse(cid), // served on helia-wrtc-star.mjs
        send,
    };

    console.log('sssssssssss', window.ctx)
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

