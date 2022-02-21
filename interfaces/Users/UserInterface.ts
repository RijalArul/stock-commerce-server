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
    role: string;

    constructor() {
        this.role = 'Super Admin'
    }
}

class Customer implements UserInterface {
    email: string;
    password: string;
    full_name: string;
    role: string;

    constructor() {
        this.role = 'Customer'
    }
}

