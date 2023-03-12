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
            console.log(careerId);
            if (!careerId) return res.status(400).send('Missing careerId');

            const periods = await Model.getPeriodsByCareer(Number(careerId));

            return res.status(200).send(periods);
        } catch (error: any) {
            return res.status(500).send({ message: error.message });
        }
    }

    public async getGroupsByProfesor(req: Request, res: Response) {
        try {
            const { profesorId } = req.params;
            if (!profesorId)
                return res.status(400).send({ Error: 'Missing profesorId' });

            const groups = await Model.getGroupsByProfesor(Number(profesorId));

            return res.status(200).send(groups);
        } catch (error: any) {
            return res.status(500).send({ message: error.message });
        }
    }

    public async getProfesorsAverageByPeriod(
        req: Request,
        res: Response,
    ): Promise<Response> {
        try {
            const { periodId } = req.params;
            if (!periodId)
                return res.status(400).send({ Error: 'Missing periodId' });

            const averageProfesors = await Model.getProfesorsAverageByPeriod(
                Number(periodId),
            );
            return res.status(200).send(averageProfesors);
        } catch (error: any) {
            return res.status(500).send({ message: error.message });
        }
    }
    public async getAverageGroupByCarrer(
        req: Request,
        res: Response,
    ): Promise<Response> {
        try {
            const { careerId } = req.params;
            if (!careerId)
                return res.status(400).send({ Error: 'Missing careerId' });

            const averageProfesors = await Model.getAverageGroupByCarrer(
                Number(careerId),
            );
            return res.status(200).send(averageProfesors);
        } catch (error: any) {
            return res.status(500).send({ message: error.message });
        }
    }
    public async getAverageQuestionByGroup(
        req: Request,
        res: Response,
    ): Promise<Response> {
        try {
            const { groupId } = req.params;
            if (!groupId)
                return res.status(400).send({ Error: 'Missing groupId' });

            const averageProfesors = await Model.getAverageQuestionByGroup(
                Number(groupId),
            );
            return res.status(200).send(averageProfesors);
        } catch (error: any) {
            return res.status(500).send({ message: error.message });
        }
    }

    public async getStudentsByGroup(
        req: Request,
        res: Response,
    ): Promise<Response> {
        try {
            const { groupId } = req.params;
            if (!groupId)
                return res.status(404).send({ Error: 'Missing groupId' });
            const studentList = await Model.getStudentsByGroup(Number(groupId));
            return res.status(200).send(studentList);
        } catch (error: any) {
            return res.status(500).send({ message: error.message });
        }
    }
}
