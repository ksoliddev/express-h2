const routerParse = require('../../lib/middlewares/routerParser')
const app = require('../../lib/app');

describe('Express Routes Validations', ()=>{
    it('should accept express valid routes function', async ()=>{
        const nextExpress = (req, res, next)=>{};
        const requestExpress = {};
        const responseExpress = { status : null};
        const result = routerParse(requestExpress, responseExpress, nextExpress);
        expect(result).toBe(undefined);
    });
    it('should return error if is passed invalid express routes function', async ()=>{
        const routes = {};
        const appConfig = ()=>{
            app.validateRoutes(routes)
        }
        expect(appConfig).toThrow(Error);
    });
})