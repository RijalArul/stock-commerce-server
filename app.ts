import express, { Application } from 'express';
import cors from 'cors'
import IndexRoutes from './routes/index';
import 'dotenv/config'

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins()
    }

    public plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use('/api/v1', IndexRoutes)
    }

    public listen(PORT: number): void {
        this.app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`)
        })
    }
}

new App().listen(8000)