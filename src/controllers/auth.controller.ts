import { Request, Response } from 'express';
import StudentModel from '../models/migration_temp/students.model';

const studentModel = new StudentModel();

export default class AuthController {
    public async login(req: Request, res: Response) {
        try {
            const result = await studentModel.login();
            return res.status(200).send(result);
        } catch (error) {
            console.log(error);
            return res.status(200).send({ message: 'LOGIN ROUTE' });
        }
    }
}
