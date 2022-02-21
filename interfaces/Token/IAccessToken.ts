import { sign, verify } from "jsonwebtoken"
interface IToken {
    access_token: string
}

export class AccessToken implements IToken {
    access_token: string;

    constructor(payload: {}) {
        this.access_token = this.generateAccessToken(payload)
    }

    generateAccessToken(payload: {}): string {
        return sign(payload, `${process.env.JWT_SECRET_KEY}`)
    }
}