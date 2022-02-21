interface UserInterface {
    email: string
    password: string
    full_name: string
    role: string
}

class SuperAdmin implements UserInterface {
    email: string;
    password: string;
    full_name: string;
    role: string = 'Super Admin';

    constructor(email: string, password: string, full_name: string) {
        this.email = email;
        this.password = password;
        this.full_name = full_name
    }
}

class Customer implements UserInterface {
    email: string;
    password: string;
    full_name: string;
    role: string = 'Customer';

    constructor(email: string, password: string, full_name: string) {
        this.email = email;
        this.password = password;
        this.full_name = full_name;

    }

}

export { SuperAdmin, Customer }

