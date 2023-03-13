/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
export type HandleModelErrorType<T extends any[], U> = (
  fn: (...args: T) => Promise<U>
) => (...args: T) => Promise<U | { success: boolean; message: string; data: any[] }>;

class ErrorHandlerMiddleware {
  public handleControllerError =
    (
      fn: (req: Request, res: Response, next: NextFunction) => Promise<void | Response>
    ): ((req: Request, res: Response, next: NextFunction) => Promise<void | Response>) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await fn(req, res, next);
      } catch (error: any) {
        console.log('\n\n');
        console.log(error);
        console.log('\n\n');
        if (error instanceof Error) {
          return res.status(500).send({ message: error.message });
        } else {
          return res.status(500).send({ message: 'Internal server error' });
        }
      }
    };

  public handleModelError: HandleModelErrorType<any[], any> =
    (fn) =>
    async (...args) => {
      try {
        const result = await fn(...args);
        if (!result) {
          return { success: false, message: 'SP_Error', data: result };
        }
        return { success: true, message: 'Success message', data: result };
      } catch (error: any) {
        console.log('\n\n');
        console.log(error?.parent?.sqlMessage || error);
        console.log('\n\n');
        return { success: false, message: error?.parent?.sqlMessage || 'Error Database', data: [] };
      }
    };
}

export default new ErrorHandlerMiddleware();
