import http2 from '../../src'

const routes = () =>{}

describe('Unsecure Server: Starter', ()=>{
    it('should throw error starting secure server without express routes', ()=>{
        const serverstarter = ()=>{
            http2.createServer(null);
        }
        expect(serverstarter).toThrow(Error);
    });
})
