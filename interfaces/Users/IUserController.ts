import { Request, Response } from 'express'
interface IUserController {
    register(req: Request, res: Response): Response,
    login(req: Request, res: Response): Response
}

export default IUserController