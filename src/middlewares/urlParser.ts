import url from 'url';

export class UrlParser {
  public parse(req : any, res : any, next : any) {
    const urlParsed = url.parse(req.url, true);
    if (urlParsed) {
      req.query = urlParsed.query;
    }
    req.body = req.body || {};
    next();
  }
}