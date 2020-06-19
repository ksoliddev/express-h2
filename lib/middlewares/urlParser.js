const url = require('url');

export default function parse(req, res, next) {
  const urlParsed = url.parse(req.url, true);
  if (urlParsed) {
    req.query = urlParsed.query;
  }
  req.body = req.body || {};
  next();
}
