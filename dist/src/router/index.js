"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const coordinators_routes_1 = __importDefault(require("./coordinators.routes"));
const admin_routes_1 = __importDefault(require("./admin.routes"));
const student_routes_1 = __importDefault(require("./student.routes"));
class RouterAPI {
    constructor() {
        this.router = (0, express_1.Router)();
        // add more routes here
        this.authRouter = new auth_routes_1.default();
        this.coordinatorRoutes = new coordinators_routes_1.default();
        this.adminRoutes = new admin_routes_1.default();
        this.studentRoutes = new student_routes_1.default();
        this.initializeRoutes(
        // add more routes here
        this.authRouter, this.coordinatorRoutes, this.adminRoutes, this.studentRoutes);
    }
    initializeRoutes(
    // add more routes here
    authRouter, coordinatorRoutes, adminRoutes, studentroutes) {
        this.router.use('/auth', authRouter.router);
        this.router.use('/coordinator', coordinatorRoutes.router);
        this.router.use('/admin', adminRoutes.router);
        this.router.use('/student', studentroutes.router);
    }
}
exports.default = RouterAPI;
//# sourceMappingURL=index.js.map