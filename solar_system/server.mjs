import path from 'path';
import fs from 'node:fs';
import process from "node:process";
import cors from 'cors';
import Enqueue from 'express-enqueue';
import compression from 'compression';
import * as dotenv from 'dotenv';
import express from 'express';

const __dirname = process.cwd();

dotenv.config();

const port = process.env.PORT
    ? process.env.PORT
    : 2758;

let whitelist = ['*']

let app = express();

app.use(compression());
app.use(express.json());

const queue = new Enqueue({
    concurrentWorkers: 4,
    maxSize: 200,
    timeout: 30000
});

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || whitelist.includes('*')) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(await cors({credentials: true}));
app.use(queue.getMiddleware());

async function main () {
    app.use(express.static('public'))

    app.use(express.static(`${__dirname}`));

    app.get(`/env.json`, async (req, res) => {
        res.status(200).sendFile(path.join(__dirname, 'env.json'))
    })

    app.get(`/env.mjs`, async (req, res) => {
        res.status(200).sendFile(path.join(__dirname, 'env.mjs'))
    })

    app.get(`/*`, async (req, res) => {
        // res.status(200).send(html);
        res.status(200).sendFile(path.join(__dirname, '/index.html'));
    });

    app.post(`/*`, async (req, res) => {
        console.log('==== POST ====', req.path);
    });

    app.use(queue.getErrorMiddleware());

    app.listen(port, () => {
        console.log('pid: ', process.pid);
        console.log('listening on http://localhost:' + port);
    });
}

main()
