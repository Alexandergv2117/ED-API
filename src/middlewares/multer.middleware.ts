import multer from 'multer';
import { RequestHandler } from 'express';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folderPath = path.join('uploads'); // ruta de la carpeta 'uploads'
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload: RequestHandler = multer({ storage: storage }).fields([
  { name: 'dalumn', maxCount: 1 },
  { name: 'dgrupo', maxCount: 1 },
  { name: 'dlista', maxCount: 1 },
  { name: 'dmater', maxCount: 1 },
  { name: 'dperso', maxCount: 1 },
]);

export { upload };
