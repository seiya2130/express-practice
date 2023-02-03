import 'express';
import { NextFunction, Request, Response } from 'express';

function requestErrorHandler(controller: Function)
{
    return async function(req: Request, res: Response, next: NextFunction){
        try {
            return await controller(req, res);
        } catch(err) {
            next(err)
        }
    }
}

export { requestErrorHandler }