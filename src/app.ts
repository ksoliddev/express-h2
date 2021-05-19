import Router from 'router';
import finalhandler from 'finalhandler';
import cors from 'cors';
import {UrlParser} from './middlewares/urlParser';
import {RouterParser } from './middlewares/routerParser';

export class AppController {

    private router = Router();
    private routes : any;
    private options = {
      cors : {
        origin: (origin : any, callback : any) => {
          callback(null, true);
        },
        credentials: true,
        optionsSuccessStatus: 200,
      }
    }

    setOptions(options : any, secure = true){
      this.options.cors = options.cors || this.options.cors
    }

    public validateOptions(){
      if (typeof this.options.cors.origin === "function"){
        this.options.cors.origin(null, ()=>{})
      }
    }

    validateRoutes(routes : any){

      if (!routes){
        throw Error("Invalid options values. routes function is required!");
      }

      if (typeof routes !== "function") {
        throw Error("Invalid options values. routes must be a function!");
      }

      /*
      TODO verify http2 option type
      if (typeof options !== http2.SecureServerOptions){
        throw Error("Invalid options values. routes must be a function!");
      }
      */
    }

    setRoutes(routes : any){
      this.validateRoutes(routes);
      this.routes = routes;
    }

    start(req : any, res : any ) {
      this.router(req, res, finalhandler(req, res));
      this.router.use(cors(this.options.cors));
      this.router.use((new UrlParser).parse);
      this.router.use((new RouterParser).parse);
      this.routes(this.router);
    }
}