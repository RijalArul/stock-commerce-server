import { Request, Response } from 'express'
interface IUserController {
    registerAdmin(req: Request, res: Response): void
    registerCustomer(req: Request, res: Response): void
    login(req: Request, res: Response): void
}

export default IUserController