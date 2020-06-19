const Router = require('router');
const finalhandler = require('finalhandler');
const cors = require('cors');
const urlParser = require('./middlewares/urlParser');
const routerParser = require('./middlewares/routerParser');

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

module.exports = new AppController();