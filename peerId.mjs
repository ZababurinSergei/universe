import process from "node:process";
import fs from "node:fs";

const fileNamePeerId = '/peerId_0.proto'
let pathNode = ''
const __dirname = process.cwd();
const isRead = true
const writePeerId = async (name) => {
    const peerId = await createEd25519PeerId()
    fs.writeFileSync(__dirname + name, exportToProtobuf(peerId))
    return peerId
}

const readPeerId = async (name) => {
    const buffer = fs.readFileSync(__dirname + name)
    return createFromProtobuf(buffer)
}

const peerId = fs.existsSync(__dirname + fileNamePeerId) && isRead ? await readPeerId(fileNamePeerId) :await writePeerId(fileNamePeerId)
