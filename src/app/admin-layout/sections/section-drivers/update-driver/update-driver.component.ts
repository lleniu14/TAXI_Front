import { Component, OnInit } from '@angular/core';
import { DataService } from '@/_services/data.service';
import { DriverService } from '@/_services/driver.service';
import { Driver } from '@/_models/driver';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {
  
  updateDriverForm: FormGroup;
  driverId: Driver;
  model: Driver;
  
  constructor(
    private driverService: DriverService, 
    private data: DataService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.data.driverId.subscribe(message => this.driverId = message);
    this.updateDriverForm = this.formBuilder.group({
      firstName: [this.driverId.firstName , [Validators.required]],
      lastName: [this.driverId.lastName, [Validators.required]],
      pesel: [this.driverId.pesel, [Validators.required]],
      phoneNumber: [this.driverId.phoneNumber, [Validators.required]],
      carModel: [this.driverId.carModel, [Validators.required]],
      registrationNumber: [this.driverId.registrationNumber, [Validators.required]],
      seatsAmount: [this.driverId.seatsAmount, [Validators.required]],
      salary: [this.driverId.salary, [Validators.required]]
    });

  }

  update() {
    const driver: Driver = {
      id: this.driverId.id,
      firstName: this.updateDriverForm.value.firstName,
      lastName: this.updateDriverForm.value.lastName,
      pesel: this.updateDriverForm.value.pesel,
      phoneNumber: this.updateDriverForm.value.phoneNumber,
      carModel: this.updateDriverForm.value.carModel,
      registrationNumber: this.updateDriverForm.value.registrationNumber,
      seatsAmount: this.updateDriverForm.value.seatsAmount,
      salary: this.updateDriverForm.value.salary
    }
    this.driverService.updateDriver(this.driverId.id, driver).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
