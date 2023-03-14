"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const AppClass = new app_1.default();
const app = AppClass.app;
let port = AppClass.port;
const startServer = () => {
    app.listen(port, () => {
        console.log(`😎 [ED-API]: API is Running 🏁🏁🏁 http://localhost:${AppClass.port} 🏁🏁🏁 ✔`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${port} is already in use. Trying another port...`);
            port += 1;
            startServer();
        }
        else {
            console.log(err);
        }
    });
};
startServer();
exports.default = app;
//# sourceMappingURL=index.js.map