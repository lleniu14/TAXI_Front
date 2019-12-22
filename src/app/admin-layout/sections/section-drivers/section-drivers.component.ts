import { Component, OnInit } from '@angular/core';
import { Driver } from '@/_models/driver';
import { DriverService } from '@/_services/driver.service';
import { DataService } from '@/_services/data.service';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-drivers',
  templateUrl: './section-drivers.component.html',
  styleUrls: ['./section-drivers.component.css']
})
export class SectionDriversComponent implements OnInit {

  constructor(
    private driverService: DriverService,
    private data: DataService,
    private router: Router) { }

  driverFromDb: any;
  driverId: any;
  message: Driver;


  /*drivers: Driver[]=[
    {
      id: 1,
      firstname: 'Karol',
      lastname: 'Łuniewski',
      pesel: 969594112,
      phoneNumber: 453234587,
      carModel: 'Opel Astra',
      registrationNumber: 'WE J054',
      seatsAmount: 5,
      salary: 3200
    },
    {
      id: 2,
      firstname: 'Konrad',
      lastname: 'Pawlak',
      pesel: 9695943212,
      phoneNumber: 453324587,
      carModel: 'Kia Ceed',
      registrationNumber: 'WA J234',
      seatsAmount: 4,
      salary: 3300
    },
  ];*/

  ngOnInit() {
    this.getAll();
    this.data.driverId.subscribe(message => this.message = message);
  }

  getAll() {
    this.driverService.getAllDrivers().subscribe(response => {
      this.driverFromDb = response;
    }, error => {
      console.log(error);
    })
  }
  delete(driver) {
    this.driverService.deleteDriver(driver.id).subscribe(response => {
      this.driverFromDb = response;
    }, error => {
      console.log(error);
    });
    window.location.reload();
  }

  update(driver: Driver) {
    this.data.sendDriverId(driver);
    this.router.navigateByUrl('admin/drivers/update');
  }
}
