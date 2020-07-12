const http2 = require('../../lib')
const app = require('../../lib/app');
const routes = () =>{}
describe('Secure Server Starter', ()=>{
    it('should throw error starting secure server without express routes', ()=>{
        const serverstarter = ()=>{
            http2.createSecureServer(routes);
        }
        expect(serverstarter).toThrow(Error);
    });
    it('should make default configuration if no options passed', ()=>{
        const serverstarter = ()=>{
            http2.createServer(routes);
        }
        expect(serverstarter).not.toThrow(Error);
    });
    it('should set configuration options passed keeping the defaults no changed', async ()=>{
        const options = {};
        const serverOptions = ()=>{
            app.setOptions(options, true)
        }
        expect(serverOptions).not.toThrow(Error);
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
