"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_model_1 = __importDefault(require("../models/questions.model"));
const Model = new questions_model_1.default();
class QuestionController {
    getQuestionByStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idQuestion } = req.params;
                console.log(idQuestion);
                if (!idQuestion)
                    return res.status(400).send('Missing idQuestion');
                const periods = yield Model.getQuestionByStudent(Number(idQuestion));
                return res.status(200).send(periods);
            }
            catch (error) {
                return res.status(500).send({ message: error.message });
            }
        });
    }
}
exports.default = QuestionController;
//# sourceMappingURL=questions.controllers.js.map