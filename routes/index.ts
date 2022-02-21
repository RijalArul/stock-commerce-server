import { Router } from "express";
import IRouter from "../interfaces/Routers/IRouter";
import UserRoutes from './users';

class IndexRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes()
    }
    routes(): void {
        this.router.use('/users', UserRoutes);
    }
}

export default new IndexRoutes().router