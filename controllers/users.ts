import { Request, Response } from "express";
import IUserController from "../interfaces/Users/IUserController";
import { SuperAdmin, Customer } from "../interfaces/Users/UserInterface"

class UserController implements IUserController {
    registerAdmin(req: Request, res: Response): Response {
        const { email, password, full_name } = req.body
        const create_admin: SuperAdmin = new SuperAdmin(email, password, full_name)
        return res.send(create_admin)
    }
    registerCustomer(req: Request, res: Response): Response {
        const { email, password, full_name } = req.body
        const create_customer: Customer = new Customer(email, password, full_name)
        return res.send(create_customer)
    }
    login(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

}

export default new UserController()