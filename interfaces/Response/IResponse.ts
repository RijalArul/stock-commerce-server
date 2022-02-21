import { Request, Response } from "express"
export interface IResponse<T> {
    data: T;
    message: string | any[];
    status: boolean;
}

export class ResponseHandler<T> implements IResponse<T> {
    data: T;
    message: string | any[];
    status: boolean;

    responseSuccess(res: Response, data: T, message: string, statusCode: number): Response {
        return res.status(statusCode).json({
            data: data,
            message: message,
            status: true
        })
    }

    responseLogin(res: Response, data: T, message: string, statusCode: number, access_token: string): Response {
        return res.status(statusCode).json({
            data: data,
            message: message,
            access_token: access_token,
            status: true
        })
    }

    static responseError(res: Response, message: string | any[], statusCode: number) {
        res.status(statusCode).json({
            statusCode: statusCode,
            message: message,
            status: false
        })
    }
}



