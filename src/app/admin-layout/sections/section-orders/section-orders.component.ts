import { Component, OnInit } from '@angular/core';
import { OrderService } from '@/_services/order.service';
import { DataService } from '@/_services/data.service';
import { Router } from '@angular/router';
import { Order } from '@/_models/order';
 
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})



export class SectionOrdersComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private data: DataService,
    private router: Router
  ) { }

  orderFromDb: any;
  orderId: any;
  message: Order;
 
  /*orders: Order[]=[
    {id: 1, customer:
      {id:1, name: 'Damian', phoneNumber: 555666777}, 
      numberOfPassengers: 2, address:'Brzezińska 10, Koluszki', destination:'Partyzantów, Kaletnik',date: new Date(2019, 11, 11)},
    {id: 2, customer:
      {id:2, name: 'Kacper', phoneNumber: 555666777}, 
      numberOfPassengers: 1, address:'Brzezińska 10, Koluszki', destination:'Partyzantów, Kaletnik',date: new Date(2019, 12, 12)},
    {id: 3, customer:
      {id:3, name: 'Filip', phoneNumber: 555666777}, 
      numberOfPassengers: 3, address:'Brzezińska 10, Koluszki', destination:'Partyzantów, Kaletnik',date: new Date(2019, 12, 12)},
    {id: 4, customer:
      {id:4, name: 'Michał', phoneNumber: 555666777}, 
      numberOfPassengers: 2, address:'Brzezińska 10, Koluszki', destination:'Partyzantów, Kaletnik',date: new Date(2019, 12, 12)},
    {id: 5, customer:
      {id:5, name: 'Paweł', phoneNumber: 555666777}, 
      numberOfPassengers: 1, address:'Brzezińska 10, Koluszki', destination:'Partyzantów, Kaletnik',date: new Date(2019, 12, 12)}
  ];*/
 
  ngOnInit() {
    this.GetAll();
    this.data.orderId.subscribe(message => this.message = message);
  }
 
  GetAll(){
    this.orderService.getAllOrders().subscribe(response => {
      this.orderFromDb = response;
    }, error => {
      console.log(error);
    })
  }
  
  delete(order){
    this.orderService.deleteOrder(order.id).subscribe(response => {
      this.orderFromDb = response;
    }, error => {
      console.log(error);
    });
    window.location.reload();
  }

  update(order: Order) {
    this.data.sendOrderId(order);
    this.router.navigateByUrl('admin/orders/update');
  }

  book(order: Order){
    this.data.sendOrderId(order);
    this.router.navigateByUrl('admin/route');
  }
 
 
}