# express-h2

[![NPM Version][npm-image]][npm-url]
[![Coverage Status](https://coveralls.io/repos/github/ksoliddev/express-h2/badge.svg?branch=master)](https://coveralls.io/github/ksoliddev/express-h2?branch=master)
[![NPM Downloads][downloads-image]][downloads-url]

[![NPM](https://nodei.co/npm/express-h2.png)](https://nodei.co/npm/express-h2/)

A simple way to use http2 protocol with [express](http://expressjs.com/) framework

* [Usage](#usage)
  * [Express Routes](#express-routes)
  * [Using secure server](#using-secure-server)
* [Configuration Options](#configuration-options)
* [License](#license)
* [Authors](#authors)

## Usage

Assuming that exists a *express route function* defined (example below)
### Express Routes

```js
//routes.js
//const usersRoutes = require('./users.routes');
export (app)=>{
    app.get('/test', (req, res)=>{
        res.json('test route is working!')
    })
    // app.use('/users/', usersRoutes)
}
```

Now you can use this *function* to handle your routes with `http2` protocol

### Using secure server
You need to pass the [secure options](https://nodejs.org/api/http2.html#http2_http2_createsecureserver_options_onrequesthandler)

```js
const http2 = require('express-h2')
const expressRoutes = require('./routes')
const fs = require('fs');

const secureOptions = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};

const server = http2.createSecureServer(secureOptions, expressRoutes)
server.listen(3443)
```
For more informations and `issues` you can see in the [oficial repository](https://github.com/ksoliddev/express-h2) or [read this article with example project](https://medium.com/@kissema1/the-easy-way-to-use-http2-protocol-with-express-framework-dfae4f8e9689?source=friends_link&sk=b6986b8dac15016b684b08b618567249)

## Configuration Options
```js
const options = {}
http2.createSecureServer(secureOptions, expressRoutes, options)
```

 - `cors` - by default allow all access using credentials, but you can set `cors` [configuration options](https://expressjs.com/en/resources/middleware/cors.html#configuration-options)

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Authors

[Kissema Eduardo Rafael](https://github.com/kissema) ([kissema1@gmail.com](mailto:kissema1@gmail.com))

[downloads-image]: https://img.shields.io/npm/dm/express-h2.svg
[downloads-url]: https://npmjs.org/package/express-h2
[npm-image]: https://img.shields.io/npm/v/express-h2.svg
[npm-url]: https://npmjs.org/package/express-h2

Sponsored By

![K SOLID](https://i.ibb.co/hdbG7t8/K-SOLID.png)