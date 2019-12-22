import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DriverService } from '@/_services/driver.service'
import { Driver } from '@/_models/driver';
import { first } from 'rxjs/operators';
import { AlertService } from '@/_services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  addDriverForm: FormGroup;
  private alertService: AlertService;
  private router: Router;

  constructor(
    private formBuilder: FormBuilder,
    private _driverService : DriverService
    ) { }

  ngOnInit() {
      this.addDriverForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      pesel: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      carModel: ['', [Validators.required]],
      registrationNumber: ['', [Validators.required]],
      seatsAmount: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    });
  }

  get f() { return this.addDriverForm.controls; }

  onSubmit(){
    const driver: Driver = {
      id: this.addDriverForm.value.id,
      firstName: this.addDriverForm.value.firstName,
      lastName: this.addDriverForm.value.lastName,
      pesel: this.addDriverForm.value.pesel,
      phoneNumber: this.addDriverForm.value.phoneNumber,
      carModel: this.addDriverForm.value.carModel,
      registrationNumber: this.addDriverForm.value.registrationNumber,
      seatsAmount: this.addDriverForm.value.seatsAmount,
      salary: this.addDriverForm.value.salary
    }
    this._driverService.addDriver(driver).pipe(first()).subscribe(
      request => {
        this.alertService.success("Kierowca dodany", true);
        this.router.navigate(['section-driver']);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

}
