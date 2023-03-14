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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_middleware_1 = require("../middlewares/multer.middleware"); // Importa el middleware de multer
const dbffile_1 = require("dbffile");
const path_1 = __importDefault(require("path"));
class AdminController {
    uploadDBF(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Usa el middleware de multer para manejar la subida de los archivos
                const localres = (0, multer_middleware_1.upload)(req, res, (err) => __awaiter(this, void 0, void 0, function* () {
                    var _a, e_1, _b, _c;
                    if (err) {
                        console.log(err);
                        return res.status(400).send({ message: 'Error uploading file(s).' });
                    }
                    console.log(req.files);
                    if (!req.files || Object.keys(req.files).length === 0) {
                        return res.status(400).send({ message: 'No file(s) were uploaded.' });
                    }
                    // Aquí puedes acceder a los archivos subidos en `req.files`
                    // ejemplo de uso de archivo dbf dalumn.dbf
                    const dbf = yield dbffile_1.DBFFile.open(path_1.default.join('uploads', 'DALUMN.DBF'));
                    console.log(`DBF file contains ${dbf.recordCount} records.`);
                    console.log(`Field names: ${dbf.fields.map((f) => f.name).join(', ')}`);
                    let count = 0;
                    try {
                        for (var _d = true, dbf_1 = __asyncValues(dbf), dbf_1_1; dbf_1_1 = yield dbf_1.next(), _a = dbf_1_1.done, !_a;) {
                            _c = dbf_1_1.value;
                            _d = false;
                            try {
                                const record = _c;
                                console.log(record);
                                count++;
                                if (count === 10)
                                    break;
                            }
                            finally {
                                _d = true;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (!_d && !_a && (_b = dbf_1.return)) yield _b.call(dbf_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    (0, multer_middleware_1.delFolderTemp)();
                }));
            }
            catch (error) {
                console.log(error);
                return res.status(500).send({ message: error.message });
            }
        });
    }
}
exports.default = AdminController;
//# sourceMappingURL=admin.controller.js.map