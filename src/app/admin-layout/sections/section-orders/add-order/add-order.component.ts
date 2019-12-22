import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '@/_services/alert.service';
import { MapsAPILoader } from '@agm/core';
import { OrderService } from '@/_services/order.service';
import { Order } from '@/_models/order';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  addOrderForm : FormGroup;
  private router: Router;
  loading = false;
  submitted = false;

  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;

  @ViewChild('destination', { static: false })
  public destinationElementRef: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private mapsAPILoader: MapsAPILoader,
    private _orderService: OrderService
  ) { }

  ngOnInit() {
    
    this.addOrderForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      destination: ['', [Validators.required]],
      passengers: [''],
    });

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
    });
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.destinationElementRef.nativeElement, {
          types: ["address"]
        });
    });
  }
  get f() { return this.addOrderForm.controls; }

  onSubmit() {
    const order: Order = {
      id: this.addOrderForm.value.id,
      name: this.addOrderForm.value.name,
      phoneNumber: this.addOrderForm.value.phoneNumber,
      destination: this.addOrderForm.value.destination,
      address: this.addOrderForm.value.address,
      numberOfPassengers: this.addOrderForm.value.passengers
    }
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.addOrderForm.invalid) {
      return;
    }
    this.loading = true;
    this._orderService.addOrder(order).pipe(first()).subscribe(
      request => {
        this.alertService.success('Dodano przejazd', true);
        this.router.navigate(['section-order']);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }
}