"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouterParser {
    parse(req, res, next) {
        res.send = res.end;
        res.json = res.end;
        this.response = res;
        res.status = this.setStatus;
        next();
    }
    setStatus(status) {
        this.response.statusCode = status;
        return this.response;
    }
}
exports.default = new RouterParser();
