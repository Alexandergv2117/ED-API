import { Request, Response } from 'express';
import CoordinatorModel from '../models/coordinator.model';
const Model = new CoordinatorModel();

export default class CoordinatorController {
    public async getPeriodsByCareer(
        req: Request,
        res: Response,
    ): Promise<Response> {
        try {
            const { careerId } = req.params;
            if (!careerId) return res.status(400).send('Missing careerId');
            if (!careerId.match(/^[0-9a-fA-F]{24}$/))
                return res.status(400).send('Invalid careerId');

            const periods = await Model.getPeriodsByCareer(Number(careerId));

            return res.status(200).send();
        } catch (error: any) {
            return res.status(500).send({ message: error.message });
        }
    }
}
