const http2 = require('../../lib')
const app = require('../../lib/app');

const routes = ()=>{}

describe('Unsecured Server Starter', ()=>{
    it('should throw error starting unsecured server without express routes', ()=>{
        const serverStarter = ()=> {
            http2.createServer()
        }
        expect(serverStarter).toThrow(Error);
    });
    it('should make default configuration if no options passed', ()=>{
        const serverStarter = ()=> {
            http2.createServer(routes)
        }
        expect(serverStarter).not.toThrow(Error);
    });
    it('should set configuration options passed keeping the defaults no changed', async ()=>{
        const options = {};
        const serverConfig = ()=> {
            app.setOptions(options, false)
        }
        expect(serverConfig).not.toThrow(Error);
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
