import { IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';

import { UrlParser } from '../../../src/middlewares/urlParser'

const request = new IncomingMessage(new Socket());
const response = new ServerResponse(request);
const next =  () => {}

describe('URL Parser Middleware', ()=>{
    it('should parse using valid request object', ()=>{
        const parser = ()=>{
            const urlParser = new UrlParser();
            urlParser.parse(request, response, next)
        }
        expect(parser).not.toThrow(Error);
    });
})
