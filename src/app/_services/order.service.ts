import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Driver } from '@/_models/driver';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '@/_models/order';
import { Guid } from 'guid-typescript';

@Injectable({ providedIn: 'root' })
export class OrderService {
    constructor(private http: HttpClient) { }


    addOrder(order: Order) {
        return this.http.post(`${environment.apiUrl}/orders/add`, order);       
    }

    getAllOrders() {
        return this.http.get<Order[]>(`${environment.apiUrl}/orders`);
    }

    deleteOrder(id: number) {
        return this.http.delete(`${environment.apiUrl}/orders/delete/${id}`);    
    }

    updateOrder(id: Guid, order: Order){
        return this.http.put(`${environment.apiUrl}/orders/update/${id}`, order);
    }
}