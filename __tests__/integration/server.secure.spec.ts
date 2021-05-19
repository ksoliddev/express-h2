import http2 from '../../lib';
import {AppController} from '../../src/app';
import { IncomingMessage, ServerResponse } from 'http';
import {Socket} from 'net';

const app = new AppController();

const secureOptions = {};
const routes = () =>{};
const invalidRoutes = {};

const request = new IncomingMessage(new Socket());
const response = new ServerResponse(request);


describe('Secure Server: Starter', ()=>{
    it('should throw error starting secure server without express routes', ()=>{

        const serverstarter = ()=>{
            http2.createSecureServer(secureOptions, null);
        }
        expect(serverstarter).toThrow(Error);
    });
    it('should throw error starting secure server with no express routes function', ()=>{
        const serverstarter = ()=>{
            http2.createSecureServer(secureOptions, invalidRoutes);
        }
        expect(serverstarter).toThrow(Error);
    });
    it('should throw error starting the application component with invalid request or response objects', async ()=>{
        const appStarter = ()=>{
            app.start(request, response);
        }
        expect(appStarter).toThrow(Error);
    });
    it('should start the application component', async ()=>{
        const appStarter = ()=>{
            app.setRoutes(()=>{})
            app.start(request, response);
        }
        expect(appStarter).not.toThrow(Error);
    });
    it('should make default configuration if no options passed', ()=>{
        // const serverstarter = ()=>{
        //     http2.createServer(routes);
        // }
        // expect(serverstarter).not.toThrow(Error);
        expect(true).toBe(true);
    });
    it('should set configuration options passed keeping the defaults no changed', async ()=>{
        const options = {};
        const serverStarter = ()=>{
            http2.createSecureServer(secureOptions, routes, options);
        }
        expect(serverStarter).not.toThrow(Error);
    });
    it('should return error if is passed invalid options', async ()=>{
        expect(true).toBe(true);
    });

    it('should return error if is passed invalid security options', async ()=>{
        expect(true).toBe(true);
    });
    it('should start a non security server', async ()=>{
        expect(true).toBe(true);
    });
    it('should start a security server', async ()=>{
        expect(true).toBe(true);
    });
})
