import { Request, Response } from 'express'
interface IUserController {
    registerAdmin(req: Request, res: Response): Response
    registerCustomer(req: Request, res: Response): Response
    login(req: Request, res: Response): Response
}

export default IUserController