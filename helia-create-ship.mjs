import createShip from './'

import { createEd25519PeerId, createFromProtobuf} from './lib-peerId-factory.js';
// import init from './PixelPlanets/out.mjs'
import {createNode} from './helia-instance.js'

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// const options = init()
export default async () => {
    try {

        const ships = []
        ships.push('cobra')
        ships.push('discovery')

        const ship = {
            discovery: null,
            cobra: null
        }

        ship.discovery = await createShip('discovery')
        ship.cobra = await createShip('cobra')

        console.log('================== ship ==================', ship)
    } catch (e) {

        console.error('================== ship ==================', e)
    }
}