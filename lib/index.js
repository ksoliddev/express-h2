import http2 from 'http2';
import app from './app';

class ExpressHttp2 {
  export createServer(routes, options = {}){
    app.setRoutes(routes);
    app.setOptions(options, false);
    return http2.createServer(options, app.start.bind(routes));
  }

  export createSecureServer(secureOptions, routes, options = {}){
    app.setRoutes(routes);
    app.setOptions(options);
    return http2.createSecureServer(secureOptions, app.start.bind(app));
  }
}

export default new ExpressHttp2();