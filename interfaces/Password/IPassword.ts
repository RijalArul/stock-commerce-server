interface PasswordInterface {
    hashPassword(password: string): string
    validatePassword(password: string, hashPassword: string): any
}

export default PasswordInterface