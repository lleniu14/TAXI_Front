import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Guid } from 'guid-typescript';
import { Driver } from '@/_models/driver';
import { Order } from '@/_models/order';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<Driver>({id:Guid.createEmpty(),firstName:"",lastName:"",pesel:-1,phoneNumber:-1,carModel:"",registrationNumber:"",seatsAmount:-1,salary:-1});
  driverId = this.messageSource.asObservable();

  private messageS = new BehaviorSubject<Order>({id:Guid.createEmpty(),name:"",phoneNumber:-1,destination:"",address:"",numberOfPassengers:-1});
  orderId = this.messageS.asObservable();

  constructor() { }

  sendDriverId(message: Driver) {
    this.messageSource.next(message)
  }

  sendOrderId(message: Order){
    this.messageS.next(message)
  }

}