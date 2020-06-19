import Router from 'router';
import finalhandler from 'finalhandler';
import cors from 'cors';
import urlParser from './middlewares/urlParser';
import routerParser from './middlewares/routerParser';

class AppController {

    router = Router();
    options = {
      cors : {
        origin: (origin, callback) => {
          callback(null, true);
        },
        credentials: true,
        optionsSuccessStatus: 200,
      }
    }

    setOptions(options, secure = true){
      this.options.cors = options.cors || this.options.cors
    }

    validateRoutes(routes){

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

    setRoutes(routes){
      this.validateRoutes(routes);
      this.routes = routes;
    }

    start(req, res ) {
      this.router(req, res, finalhandler(req, res));
      this.router.use(cors(this.options.cors));
      this.router.use(urlParser);
      this.router.use(routerParser);
      this.routes(this.router);
    }
}

export default new AppController();