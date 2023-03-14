"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./src/router/index"));
const cors_middleware_1 = require("./src/middlewares/cors.middleware");
const config_1 = __importDefault(require("./src/db/config"));
class App {
    constructor() {
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
        this.routerAPI = new index_1.default();
        this.initializeMiddlewares();
        this.initializeRoutes(this.routerAPI);
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)(cors_middleware_1.corsOptions));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        config_1.default.testConnection();
    }
    initializeRoutes(routes) {
        this.app.use('/api/v1', routes.router);
        this.app.get('/', (req, res) => {
            res.send('ED-API!!!');
        });
        this.app.use((req, res, next) => {
            res.status(404).send({ message: 'Page not found' });
            next();
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map