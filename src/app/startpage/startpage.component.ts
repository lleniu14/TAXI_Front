import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '@/_services/alert.service'
import { OrderService } from '@/_services/order.service';
import { Order } from '@/_models/order';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  orderForm: FormGroup;
  loading = false;
  submitted = false;
  private router: Router;

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

    this.orderForm = this.formBuilder.group({
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
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.destinationElementRef.nativeElement, {
          types: ["address"]
        });
      });
    });
  }

  //get f() { return this.orderForm.controls; }

  onSubmit() {
    const order: Order = {
      id: this.orderForm.value.id,
      name: this.orderForm.value.name,
      phoneNumber: this.orderForm.value.phoneNumber,
      destination: this.orderForm.value.destination,
      address: this.orderForm.value.address,
      numberOfPassengers: this.orderForm.value.passengers
    }

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.orderForm.invalid) {
      return;
    }
    this.loading = true;
    this._orderService.addOrder(order).pipe(first()).subscribe(
      request => {
        this.alertService.success('Dodano przejazd', true);
        this.router.navigate(['startpage']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
}
