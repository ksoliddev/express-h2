import express from 'express';
import http2 from '../../src';
import path from 'path'
import fs from 'fs'

const app = express();


const routes = (router : any)=>{
    router.get("/test", (req : any, res : any)=>{
        res.json("OKK!! !!")
    })
}

app.listen(3333, ()=>console.log("RUNING SERVER!!!"));
routes(app);

const certPath = path.join(`${__dirname}/../dependencies/cert/`);
const pfx = fs.readFileSync(`${certPath}inss.app.pfx`);
const passphrase = 'Mudar@123';

const secureOptions = {pfx, passphrase}

const server = http2.createSecureServer(secureOptions, routes);
server.listen(3443, ()=>console.log("Simple Http2 Running!!!"));
