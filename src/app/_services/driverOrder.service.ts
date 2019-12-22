import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Driver } from '@/_models/driver';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '@/_models/order';
import { Guid } from 'guid-typescript';
import { DriverOrder } from '@/_models/driverorder';

@Injectable({ providedIn: 'root' })
export class DriverOrderService {
    constructor(private http: HttpClient) { }

    getAllDrivers() {
        return this.http.get<DriverOrder[]>(`${environment.apiUrl}/DriverOrder`);
    }

}