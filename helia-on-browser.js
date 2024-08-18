// npm i helia @helia/unixfs
// const helia = Helia, {unixfs} = HeliaUnixfs, {CID} = Multiformats; // from CDN
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


//NOTE: not implement rs[Symbol.asyncIterator] in browser impls
const rsWithAi = rs => {
  if (!(Symbol.asyncIterator in rs)) rs[Symbol.asyncIterator] = async function *() {
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
const node1 = await helia.createHelia({
  libp2p: {
    // https://github.com/ipfs/helia/blob/main/packages/helia/src/utils/libp2p-defaults.browser.ts#L27
    addresses: {
      listen: [
        "/webrtc", "/wss", "/ws",
        "/ip4/127.0.0.1/tcp/9090/ws/p2p-webrtc-star", // see
      ],
    },
    transports: [
      webRTC(), webRTCDirect(),
      webTransport(),
      // https://github.com/libp2p/js-libp2p-websockets#libp2p-usage-example
      webSockets({filter: filters.all}),
      circuitRelayTransport({discoverRelays: 1}),
      star.transport,
    ],
    peerDiscovery: [bootstrap(bootstrapConfig), star.discovery],
    // https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#configuring-connection-gater
    connectionGater: {
      denyDialMultiaddr: async (...args) => false,
    },
  },
}); // tcp network, stored on memory (not use files)
console.log("[createHelia]");
const node1fs = unixfs(node1);

//IMPORTANT: must await libp2p.getMultiaddrs().length > 0
while (node1.libp2p.getMultiaddrs().length === 0) await new Promise(f => setTimeout(f, 500));
console.log("[libp2p.getMultiaddrs]", node1.libp2p.getMultiaddrs().map(ma => `${ma}`));

// libp2p dialProtocol examples
const proto = "/my-echo/0.1";
const handler = ({connection, stream}) => {
  stream.sink(async function* () {
    for await (const bufs of stream.source) {
      yield bufs.slice().slice();
    }
  }());
};
await node1.libp2p.handle(proto, handler);
const send = async (ma, msg) => {
  if (typeof ma === "string") ma = multiaddr(ma);
  const stream = await node1.libp2p.dialProtocol(ma, proto);
  stream.sink(async function* () {
    yield (new TextEncoder().encode(msg));
  }());
  for await (const bufs of stream.source) {
    return new TextDecoder().decode(bufs.slice().slice());
  }
};

// for web console
window.ctx = {
  helia, CID, multiaddr, node1, node1fs,
  maStar: localId => multiaddr(`/ip4/127.0.0.1/tcp/9090/ws/p2p-webrtc-star/p2p/${localId}`),
  maP2p: localId => multiaddr(`/p2p/${localId}`),
  cidHw: CID.parse("bafkreid7qoywk77r7rj3slobqfekdvs57qwuwh5d2z3sqsw52iabe3mqne"), // served on helia-wrtc-star.mjs
  send,
};

/*
// example data
const blob = new Blob([new TextEncoder().encode("Hello World!")], {type: "text/plain;charset=utf-8"});
console.log("[Blob]", blob);

// publish blob as CID with addByteStream()
const cid = await ctx.node1fs.addByteStream(rsWithAi(blob.stream()));
//const cid = await ctx.node1fs.addBytes(new Uint8Array(await blob.arrayBuffer()));
console.log("[unixfs.addByteStream]", cid);
const cidStr = cid.toString();
const cidAlt = CID.parse(cidStr);
const ret1 = await ctx.node1.pins.add(cidAlt); //NOTE: pins not accept CID string
console.log("[pins.add]", ret1);

// NOTE: helia's pins needs stored blocks in blockstore (e.g. cannnot pin before stat()/ls()/cat())
const stat = await ctx.node1fs.stat(cidStr);
console.log("[unixfs.stat]", stat);

// get CID object from CID string with ls() from @helia/unixfs
for await (const entry of ctx.node1fs.ls(cidStr)) console.log("[unixfs.ls]", entry.cid);

// retrieve data with cat(cid or cid-string)
const u8as = [];
for await (const u8a of ctx.node1fs.cat(cidStr)) {
  console.log("[unixfs.cat]", u8a);
  u8as.push(u8a.slice());
}
console.log("[Blob.text]", await (new Blob(u8as).text()));
*/

// stop only helia nodes; unixfs is just a wrapper
//console.log("[helia.stop]", await node1.stop());
