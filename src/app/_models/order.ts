import { Guid } from 'guid-typescript';

export class Order {
    id: Guid;
    name: string;
    phoneNumber: number;
    destination: string;
    address: string;
    numberOfPassengers: number;
    }