"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questions_controllers_1 = __importDefault(require("../controllers/questions.controllers"));
class QuestionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.QuestionController = new questions_controllers_1.default();
        this.initializeQuestionRoutes(this.router, this.QuestionController);
    }
    initializeQuestionRoutes(router, Controller) {
        router.get('/', (req, res) => {
            res.send('Hello World!');
        });
        // master rute
        // ruta de las preguntas
        router.get('/student/:idQuestion', Controller.getQuestionByStudent);
    }
}
exports.default = QuestionRoutes;
//# sourceMappingURL=questions.routes.js.map