"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
class UrlParser {
    parse(req, res, next) {
        const urlParsed = url_1.default.parse(req.url, true);
        if (urlParsed) {
            req.query = urlParsed.query;
        }
        req.body = req.body || {};
        next();
    }
}
exports.default = new UrlParser();
