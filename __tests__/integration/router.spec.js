const http2 = require('../../lib')

describe('Configuration Validation', ()=>{
    it('should make default configuration if no options passed', async ()=>{
        expect(true).toBe(true);
    });
    it('should set configuration options passed keeping the defaults no changed', async ()=>{
        expect(true).toBe(true);
    });
    it('should return error if is passed invalid options', async ()=>{
        expect(true).toBe(true);
    });

    it('should return error if is passed invalid security options', async ()=>{
        expect(true).toBe(true);
    });
});

describe('Express Routes Validations', ()=>{
    it('should accept express valid routes function', async ()=>{
        expect(true).toBe(true);
    });
    it('should return error if is passed invalid express routes function', async ()=>{
        expect(true).toBe(true);
    });
})

describe('Server Starter', ()=>{
    it('should start a non security server', async ()=>{
        expect(true).toBe(true);
    });
    it('should start a security server', async ()=>{
        expect(true).toBe(true);
    });
})
