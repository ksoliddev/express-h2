# Express-h2

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

A simple way for use http2 protocol with [express](http://expressjs.com/) framework

* [How to install](#how-to-install)
* [How to use](#how-to-use)
  * [Express Routes]()
  * [Simple Usage](#simple-usage-enable-all-cors-requests)
  * [Secure Usage](#enable-cors-for-a-single-route)
* [Configuration Options](#configuration-options)
* [License](#license)
* [Authors](#author)

## How to install
using `npm`
```bash
npm i express-h2
```
or using `yarn`
```bash
yarn add express-h2
```

## How to use

Assuming that exists a *express route function* defined (example below)

```js
//routes.js
import { Application } from 'express';
export (app : Application)=>{
    app.get('/test', (req, res)=>{
        res.json('test route is working!')
    })
    app.use('separated_file.routes.js')
}
```

Now you can use this *function* to handle your routes with `http2` protocol

### Using simple server **(Not recommended)**

```js
const http2 = require('express-h2')
const expressRoutes = require('./routes')

http2.createServer(expressRoutes)
http2.listen(3333)
```

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

http2.createSecureServer(secureOptions, expressRoutes)
http2.listen(3443)
```
For more informations and `issues` you can see in the [oficial repository](https://github.com/ksoliddev/express-h2)

## Configuration Options
```js
const options = {}
//using simple server
http2.createServer(expressRoutes, options)
//using secure server
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