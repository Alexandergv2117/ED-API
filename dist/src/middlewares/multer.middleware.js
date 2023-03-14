"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delFolderTemp = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const folderPath = path_1.default.join('uploads'); // ruta de la carpeta 'uploads'
        if (!fs_1.default.existsSync(folderPath))
            fs_1.default.mkdirSync(folderPath);
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
exports.upload = (0, multer_1.default)({ storage: storage }).fields([
    { name: 'DALUMN.DBF', maxCount: 1 },
    { name: 'DGRUPO.DBF', maxCount: 1 },
    { name: 'DLISTA.DBF', maxCount: 1 },
    { name: 'DMATER.DBF', maxCount: 1 },
    { name: 'DPERSO.DBF', maxCount: 1 },
]);
const delFolderTemp = () => {
    fs_1.default.rm(path_1.default.join('uploads'), { recursive: true }, (err) => {
        if (err)
            throw err;
    });
};
exports.delFolderTemp = delFolderTemp;
//# sourceMappingURL=multer.middleware.js.map