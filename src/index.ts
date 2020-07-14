import http2 from 'http2';
import {AppController} from './app';

const app = new AppController();

class ExpressHttp2 {
  createServer(routes : any, options = {}){
    app.setRoutes(routes);
    app.setOptions(options, false);
    return http2.createServer(options, app.start.bind(routes));
  }

  createSecureServer(secureOptions : any, routes : any, options = {}){
    app.setRoutes(routes);
    app.setOptions(options);
    return http2.createSecureServer(secureOptions, app.start.bind(app));
  }
}

export default new ExpressHttp2();