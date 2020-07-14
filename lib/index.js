"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http2_1 = __importDefault(require("http2"));
const app_1 = __importDefault(require("./app"));
class ExpressHttp2 {
    createServer(routes, options = {}) {
        app_1.default.setRoutes(routes);
        app_1.default.setOptions(options, false);
        return http2_1.default.createServer(options, app_1.default.start.bind(routes));
    }
    createSecureServer(secureOptions, routes, options = {}) {
        app_1.default.setRoutes(routes);
        app_1.default.setOptions(options);
        return http2_1.default.createSecureServer(secureOptions, app_1.default.start.bind(app_1.default));
    }
}
exports.default = new ExpressHttp2();
