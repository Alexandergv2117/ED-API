import { Request, Response } from 'express';
import CoordinatorModel from '../models/coordinator.model';
const Model = new CoordinatorModel();
import ErrorHandlerMiddleware, { HandleModelErrorType } from '../middlewares/errorHandler.middleware';

export default class CoordinatorController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleModelError: HandleModelErrorType<any[], any> = ErrorHandlerMiddleware.handleModelError;
  public getPeriodsByCareer = async (req: Request, res: Response): Promise<Response> => {
    const { careerId } = req.params;
    if (!careerId) return res.status(400).send('Missing careerId');
    const { data } = await this.handleModelError(Model.getPeriodsByCareer)(Number(careerId));
    return res.status(200).send(data);
  };

  public getGroupsByProfesor = async (req: Request, res: Response) => {
    const { profesorId } = req.params;
    if (!profesorId) return res.status(400).send({ Error: 'Missing profesorId' });
    const { data } = await this.handleModelError(Model.getGroupsByProfesor)(Number(profesorId));
    return res.status(200).send(data);
  };

  public getProfesorsAverageByPeriod = async (req: Request, res: Response): Promise<Response> => {
    const { periodId } = req.params;
    if (!periodId) return res.status(400).send({ Error: 'Missing periodId' });
    const { data } = await this.handleModelError(Model.getProfesorsAverageByPeriod)(Number(periodId));
    return res.status(200).send(data);
  };

  public getAverageGroupByCarrer = async (req: Request, res: Response): Promise<Response> => {
    const { careerId } = req.params;
    if (!careerId) return res.status(400).send({ Error: 'Missing careerId' });
    const { data } = await this.handleModelError(Model.getAverageGroupByCarrer)(Number(careerId));
    return res.status(200).send(data);
  };

  public getAverageQuestionByGroup = async (req: Request, res: Response): Promise<Response> => {
    const { groupId } = req.params;
    if (!groupId) return res.status(400).send({ Error: 'Missing groupId' });
    const { data } = await this.handleModelError(Model.getAverageQuestionByGroup)(Number(groupId));
    return res.status(200).send(data);
  };

  public getStudentsByGroup = async (req: Request, res: Response): Promise<Response> => {
    const { groupId } = req.params;
    if (!groupId) return res.status(404).send({ Error: 'Missing groupId' });
    const { data } = await this.handleModelError(Model.getStudentsByGroup)(Number(groupId));
    return res.status(200).send(data);
  };
}
