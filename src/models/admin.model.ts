import db from '../db/config';
class Admin {
  public async uploadDBF(req: any) {
    const pilin = 10;

    const { file } = req;
    return 'Archivos recibidos desde model admin';
  }
}

export default new Admin();
