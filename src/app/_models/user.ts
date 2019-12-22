import { Guid } from 'guid-typescript';

export class User {
    id: Guid;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}