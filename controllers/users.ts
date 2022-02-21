import { Request, Response } from "express";
import { ResponseHandler } from "../interfaces/Response/IResponse";
import { AccessToken } from "../interfaces/Token/IAccessToken";
import IUserController from "../interfaces/Users/IUserController";
import { SuperAdmin, Customer, UserInterface } from "../interfaces/Users/UserInterface";
import Password from "../middleware/Password";
const { User } = require('../models');


class UserController implements IUserController {
    async registerAdmin(req: Request, res: Response): Promise<void> {
        try {
            const { email, password, full_name, phone_number } = req.body;
            const admin: SuperAdmin = new SuperAdmin(email, password, full_name, phone_number);

            const user = await User.create(admin);
            new ResponseHandler().responseSuccess(res, user, 'Successful Registered Admin', 201)
        } catch (err: any) {
            const errs = err.errors
                ? err.errors.map((error: any) => {
                    return error.message
                })
                : null
            ResponseHandler.responseError(res, errs, 400)
        }
    }
    registerCustomer(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }
    async login(req: Request, res: Response): Promise<void> {
        try {

            const payload_user: UserInterface = req.body;

            const user = await User.findOne({
                where: {
                    email: payload_user.email
                }
            })

            if (user) {
                const validatePassword = new Password(user.password).validatePassword(payload_user.password, user.password)
                if (validatePassword) {
                    const access_token: string = new AccessToken(payload_user).access_token
                    new ResponseHandler().responseLogin(res, user, "Login Successful", 200, access_token)
                } else {
                    throw { name: "Unauthorized" }
                }
            } else {
                throw { name: "Unauthorized" }
            }
        } catch (err: any) {
            if (err.name === "Unauthorized") {
                ResponseHandler.responseError(res, "Login Failed", 401)
            } else {
                ResponseHandler.responseError(res, "Internal Server Error", 500)
            }
        }
    }
    // static async registerAdmin(req: Request, res: Response): Response {
    //     try {
    //         const { email, password, full_name, phone_number } = req.body
    //         const create_admin: SuperAdmin = new SuperAdmin(email, password, full_name, phone_number)
    //         const new_password: string = new Password(password).hashPassword(password);

    //         // console.log(new_password)
    //         return res.send(create_admin)

    //     } catch (err) {

    //     }
    // }
    // registerCustomer(req: Request, res: Response): Response {
    //     const { email, password, full_name, phone_number } = req.body
    //     const create_customer: Customer = new Customer(email, password, full_name, phone_number)
    //     return res.send(create_customer)
    // }
    // login(req: Request, res: Response): Response {
    //     throw new Error("Method not implemented.");
    // }

}

export default new UserController()