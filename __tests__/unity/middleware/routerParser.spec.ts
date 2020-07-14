import { RouterParser } from '../../../src/middlewares/routerParser'

const request = {query : null}
const response = {}
const next = {}

describe('Router Parser Middleware', ()=>{
    it('should throw Error using invalid request object', ()=>{
        const parser = ()=>{
            (new RouterParser()).parse(request, response, next);
        }
        expect(parser).toThrow(Error);
    });
    it('should set status', ()=>{
        const statusSetting = ()=>{
        const object : any = new RouterParser();
        object.response = {}
        object.setStatus = jest.spyOn(RouterParser.prototype as any, 'setStatus');
        object.setStatus('teste')
        }

        expect(statusSetting).not.toThrow(Error);
    });

})
