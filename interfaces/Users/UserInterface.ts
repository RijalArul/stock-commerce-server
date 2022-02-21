import Password from "../../middleware/Password";

export interface UserInterface {
    email: string;
    password: string;
    full_name: string;
    role: string;
    phone_number: string;
}

class SuperAdmin implements UserInterface {
    email: string;
    password: string;
    full_name: string;
    role: string = 'Super Admin';
    phone_number: string;

    constructor(email: string, password: string, full_name: string, phone_number: string) {
        this.email = email;
        this.password = new Password(password).hashPassword(password);
        this.full_name = full_name
        this.phone_number = phone_number
    }
}

class Customer implements UserInterface {
    email: string;
    password: string;
    full_name: string;
    role: string = 'Customer';

    constructor(email: string, password: string, full_name: string, phone_number: string) {
        this.email = email;
        this.password = password;
        this.full_name = full_name;
        this.phone_number = phone_number
    }
    phone_number: string;

}

export { SuperAdmin, Customer }

