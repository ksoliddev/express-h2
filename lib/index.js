const http2 = require('http2');
const app = require('./app');

class ExpressHttp2 {
  createServer(routes, options = {}){
    app.setRoutes(routes);
    app.setOptions(options, false);
    return http2.createServer(options, app.start.bind(routes));
  }

  createSecureServer(secureOptions, routes, options = {}){
    app.setRoutes(routes);
    app.setOptions(options);
    return http2.createSecureServer(secureOptions, app.start.bind(app));
  }
}

module.exports = new ExpressHttp2();