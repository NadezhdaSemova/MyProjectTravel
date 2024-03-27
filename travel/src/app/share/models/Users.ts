export class User {

    id!: string;
    email!: string;
    username!: string;
    posts!: [];
    token!: string;
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