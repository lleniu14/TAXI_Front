import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '@/_services/alert.service';
import { MapsAPILoader } from '@agm/core';
import { OrderService } from '@/_services/order.service';
import { Order } from '@/_models/order';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DataService } from '@/_services/data.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  updateOrderForm : FormGroup;
  private router: Router;
  loading = false;
  submitted = false;
  orderId: Order;
  model: Order;

  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;

  @ViewChild('destination', { static: false })
  public destinationElementRef: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private mapsAPILoader: MapsAPILoader,
    private _orderService: OrderService,
    private data: DataService 
  ) { }

  ngOnInit() {
    this.data.orderId.subscribe(message => this.orderId = message);
    this.updateOrderForm = this.formBuilder.group({
      name: [this.orderId.name, [Validators.required]],
      phoneNumber: [this.orderId.phoneNumber, [Validators.required]],
      address: [this.orderId.address, [Validators.required]],
      destination: [this.orderId.destination, [Validators.required]],
      passengers: [this.orderId.numberOfPassengers],
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
  get f() { return this.updateOrderForm.controls; }

  update() {
    const order: Order = {
      id: this.orderId.id,
      name: this.updateOrderForm.value.name,
      phoneNumber: this.updateOrderForm.value.phoneNumber,
      destination: this.updateOrderForm.value.destination,
      address: this.updateOrderForm.value.address,
      numberOfPassengers: this.updateOrderForm.value.passengers
    }
    this._orderService.updateOrder(this.orderId.id, order).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
