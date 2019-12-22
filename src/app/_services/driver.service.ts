import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Driver } from '@/_models/driver';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guid } from 'guid-typescript';

@Injectable({ providedIn: 'root' })
export class DriverService {
    constructor(private http: HttpClient) { }

    getAllDrivers() {
        return this.http.get<Driver[]>(`${environment.apiUrl}/drivers`);
    }
   
    addDriver(driver: Driver) {
        return this.http.post(`${environment.apiUrl}/drivers/add`, driver);
            
    }
    updateDriver(id: Guid, driver: Driver) {
        return this.http.put(`${environment.apiUrl}/drivers/update/${id}`, driver)
    }

    deleteDriver(id: Guid) {
        return this.http.delete(`${environment.apiUrl}/drivers/delete/${id}`);
            
    }


}