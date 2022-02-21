"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
    }
    listen(PORT) {
        this.app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    }
}
new App().listen(8000);
