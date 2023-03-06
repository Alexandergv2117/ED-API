import { Request, Response } from 'express';
import AdminModel from '../models/admin.modules';
const Model = new AdminModel();

export default class AdminController {
  public async uploadDBF(req: Request, res: Response): Promise<Response> {
    try {
      const data = await Model.uploadDBF(req);
      return res.status(200).send(data);
    } catch (error: any) {
      return res.status(500).send({ message: error.message});
    }
  }
}