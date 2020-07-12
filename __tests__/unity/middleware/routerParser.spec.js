const rewire = require('rewire');
const routerParse = rewire('../../../lib/middlewares/routerParser.js')

describe('Unit Tests: routerParser', ()=>{
    it('should set status data', async ()=>{
        routerParse.__set__('response', {statusCode : null});
        const response = routerParse.__get__('response');
        const setStatus  = routerParse.__get__('setStatus');
        const status = 12;
        setStatus(status)
        expect(response.statusCode).toBe(status);
    });
})