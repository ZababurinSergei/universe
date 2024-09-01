import * as helia from "helia";
import {unixfs} from "@helia/unixfs";
import {CID} from "multiformats/cid";
import { webRTC, webRTCDirect } from '@libp2p/webrtc'
import {FaultTolerance} from '@libp2p/interface-transport'
import {lpStream, decode, encode} from 'it-length-prefixed-stream'
import {fromString, toString} from 'uint8arrays'
import { createLibp2p } from 'libp2p'
import { noise } from '@chainsafe/libp2p-noise'
import { multiaddr } from '@multiformats/multiaddr'

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
globalThis.pubsubPeerList = []
export const createNode = async (DOM, type, publicPeerId, privatePeerId) => {
    const peerList = new Set();

    const configNode = {
        libp2p: {
            transports: [
                webRTCDirect()
            ],
            connectionEncryption: [
                noise()
            ]
        }
    }

    if (type === 'public') {
        configNode.libp2p.peerId = publicPeerId
    }

    if (type === 'private') {
        configNode.libp2p.peerId = privatePeerId
    }

    const node = await helia.createHelia(configNode); // tcp network, stored on memory (not use files)

console.log('------------------', node)
    debugger
    const nodeFs = unixfs(node);

    while (node.libp2p.getMultiaddrs().length === 0) await new Promise(f => setTimeout(f, 500));

    node.libp2p.addEventListener('connection:open', (event) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] connection:open',type, {
            id: event.detail.id,
            remotePeer: event.detail.remotePeer.toString(),
            remoteAddr: event.detail.remoteAddr.toString(),
            detail: event.detail.stat.status
        })
    })

    node.libp2p.addEventListener('connection:close', (event) => {
        const currentPeerId = publicPeerId.toString()
        console.log('[[[[[[[ LISTENER ]]]]]]] connection:close',type, currentPeerId)
    })

    node.libp2p.addEventListener('connection:prune', (event) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] connection:prune', event.detail)
    })

    node.libp2p.addEventListener('peer:connect', async (event) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] peer:connect', event.detail.toString())
    })

    node.libp2p.addEventListener('peer:disconnect', (event) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] peer:disconnect', event.detail.toString())
    })

    node.libp2p.addEventListener('peer:discovery', (evt) => {

    })

    node.libp2p.addEventListener('peer:identify', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] peer:identify', {
            peerId: event.detail.peerId.toString(),
            observedAddr: event.detail.observedAddr.toString(),
            listenAddrs: event.detail.listenAddrs.toString()
        })
    })

    node.libp2p.addEventListener('peer:update', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] peer:update')
    })

    node.libp2p.addEventListener('self:peer:update', (event) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] self:peer:update', event.detail)
    })

    node.libp2p.addEventListener('start', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] start', event.detail)
    })

    node.libp2p.addEventListener('stop', (evt) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] stop', event.detail)
    })

    node.libp2p.addEventListener('transport:close', (event) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] transport:close', event.detail)
    })

    node.libp2p.addEventListener('transport:listening', (event) => {
        console.log('[[[[[[[ LISTENER ]]]]]]] transport:listening', event.detail)
    })

    if(type === 'public') {
        globalThis.publicShip = node
    }

    if(type === 'private') {
        globalThis.privateShip = node
    }

    window.addEventListener("beforeunload", (event) => {
        // Отмените событие, как указано в стандарте.
        // event.preventDefault();
        // const publicConnections = globalThis.publicNode.libp2p.getConnections()
        // const privateConnections = globalThis.privateNode.libp2p.getConnections()
        // for (let connect of publicConnections) {
        //     connect.close()
        // }
        //
        // for (let connect of privateConnections) {
        //     connect.close()
        // }
        //
        // event.returnValue = "";
    });


    return node
}

