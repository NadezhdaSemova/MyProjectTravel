export class User {

    _id!: string;
    email!: string;
    username!: string;
    posts!: [];
    token!: string;
}

export class UserForAuthentication {
    username!: string;
    email!: string;
    password!: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserRegister {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}