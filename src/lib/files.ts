import fs from 'fs';

export const deleteFile = (dir: string) => {
  fs.unlink(dir, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`El archivo ${dir} ha sido eliminado exitosamente.`);
  });
};
