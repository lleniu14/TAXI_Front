import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AddressBuilder{

    address: string;

    street: string [] = [
        'Kartezjusza',
        'Górczewska',
        'Foksal',
        'Romualda Traugutta',
        'Gęsta',
        'Otwocka',
        'Rolanda',
        'Komorska',
        'Batorego',
        'Świętokrzyska',
        'Krakowska'
    ]

    BuildAddress(): string{
        this.address="";
        const random = Math.floor(Math.random() * (11 - 1)) + 1;
        this.address=this.address + this.street[Math.floor(Math.random() * (11 - 1)) + 1] +
        " " + random.toString() + ", Warszawa, Polska";
        console.log(this.address);
        return this.address;
    }

}