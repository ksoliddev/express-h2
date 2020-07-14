import { AppController } from '../../src/app'

const app = new AppController();

describe('APP Component', ()=>{
    it('should validate default options', ()=>{
        const optionsValidator = ()=>{
            app.validateOptions()
        }
        expect(optionsValidator).not.toThrow(Error);
    });
})