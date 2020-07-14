"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("router"));
const finalhandler_1 = __importDefault(require("finalhandler"));
const cors_1 = __importDefault(require("cors"));
const urlParser_1 = __importDefault(require("./middlewares/urlParser"));
const routerParser_1 = __importDefault(require("./middlewares/routerParser"));
class AppController {
    constructor() {
        this.router = router_1.default();
        this.options = {
            cors: {
                origin: (origin, callback) => {
                    callback(null, true);
                },
                credentials: true,
                optionsSuccessStatus: 200,
            }
        };
    }
    setOptions(options, secure = true) {
        this.options.cors = options.cors || this.options.cors;
    }
    validateRoutes(routes) {
        if (!routes) {
            throw Error("Invalid options values. routes function is required!");
        }
        if (typeof routes !== "function") {
            throw Error("Invalid options values. routes must be a function!");
        }
    }
    setRoutes(routes) {
        this.validateRoutes(routes);
        this.routes = routes;
    }
    start(req, res) {
        this.router(req, res, finalhandler_1.default(req, res));
        this.router.use(cors_1.default(this.options.cors));
        this.router.use(urlParser_1.default);
        this.router.use(routerParser_1.default);
        this.routes(this.router);
    }
}
exports.default = new AppController();
