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
const answers_test_comment_1 = __importDefault(require("../models/migration_temp/answers_test_comment"));
const answers_test_model_1 = __importDefault(require("../models/migration_temp/answers_test.model"));
const questions_model_1 = __importDefault(require("../models/migration_temp/questions.model"));
const questions_test_model_1 = __importDefault(require("../models/migration_temp/questions_test.model"));
const employes_model_1 = __importDefault(require("../models/migration_temp/employes.model"));
const quarters_model_1 = __importDefault(require("../models/migration_temp/quarters.model"));
const quarters_details_model_1 = __importDefault(require("../models/migration_temp/quarters_details.model"));
const departments_model_1 = __importDefault(require("../models/migration_temp/departments.model"));
const majors_model_1 = __importDefault(require("../models/migration_temp/majors.model"));
const programs_model_1 = __importDefault(require("../models/migration_temp/programs.model"));
const coordinators_model_1 = __importDefault(require("../models/migration_temp/coordinators.model"));
const students_model_1 = __importDefault(require("../models/migration_temp/students.model"));
const students_courses_model_1 = __importDefault(require("../models/migration_temp/students_courses.model"));
const courses_model_1 = __importDefault(require("../models/migration_temp/courses.model"));
class MigrationsController {
    migration(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const answerTestComment = yield answers_test_comment_1.default.findAll();
                const answerTest = yield answers_test_model_1.default.findAll();
                const question = yield questions_model_1.default.findAll();
                const questionTest = yield questions_test_model_1.default.findAll();
                const employee = yield employes_model_1.default.findAll();
                const quarter = yield quarters_model_1.default.findAll();
                const quarterDetail = yield quarters_details_model_1.default.findAll();
                const department = yield departments_model_1.default.findAll();
                const major = yield majors_model_1.default.findAll();
                const program = yield programs_model_1.default.findAll();
                const coordinator = yield coordinators_model_1.default.findAll();
                const student = yield students_model_1.default.findAll();
                const studentCourse = yield students_courses_model_1.default.findAll();
                const course = yield courses_model_1.default.findAll();
                return res.status(200).send({ message: 'MIGRATION ROUTE SUCCESS' });
            }
            catch (error) {
                console.log(error);
                return res.status(500).send({ message: 'ERROR DURING MIGRATION' });
            }
        });
    }
}
exports.default = MigrationsController;
//# sourceMappingURL=migrations.controller.js.map