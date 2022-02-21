import { Router } from "express";
import UserController from "../controllers/users";
import IRouter from "../interfaces/Routers/IRouter";

class UserRoutes implements IRouter {
    public router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }
    routes(): void {
        this.router.post('/register/admin', UserController.registerAdmin);
        this.router.post('/register/customer', UserController.registerCustomer);
        this.router.post('/login', UserController.login)
    }
}

export default new UserRoutes().router