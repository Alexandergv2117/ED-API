import multer from 'multer';
import { RequestHandler } from 'express';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folderPath = path.join('uploads'); // ruta de la carpeta 'uploads'
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

export const upload: RequestHandler = multer({ storage: storage }).fields([
  { name: 'DALUMN.DBF', maxCount: 1 },
  { name: 'DGRUPO.DBF', maxCount: 1 },
  { name: 'DLISTA.DBF', maxCount: 1 },
  { name: 'DMATER.DBF', maxCount: 1 },
  { name: 'DPERSO.DBF', maxCount: 1 }
]);

export const delFolderTemp = () => {
  fs.rm(path.join('uploads'), { recursive: true }, (err) => {
    if (err) throw err;
  });
};
