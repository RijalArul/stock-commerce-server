import PasswordInterface from "../interfaces/Password/IPassword";
import bcrypt from 'bcryptjs';

class Password implements PasswordInterface {
    public salt: number;
    constructor(public password: string) {
        this.salt = 10;
        this.password = password
        this.hashPassword(password)
    }
    validatePassword(password: string, hashPassword: string) {
        return bcrypt.compareSync(password, hashPassword)
    }
    hashPassword(password: string): string {
        return bcrypt.hashSync(password, this.salt)
    }
}

export default Password