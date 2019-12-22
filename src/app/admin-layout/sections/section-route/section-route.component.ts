import { Component, OnInit, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { DataService } from '@/_services/data.service';
import { Order } from '@/_models/order';
import { Observable, Observer } from 'rxjs';
import { DriverOrderService } from '@/_services/driverOrder.service';
import { AddressBuilder } from '@/_helpers/addressbuilder';
import { DriverOrder } from '@/_models/driverorder';


@Component({
  selector: 'app-section-route',
  templateUrl: './section-route.component.html',
  styleUrls: ['./section-route.component.css']
})
export class SectionRouteComponent implements OnInit {

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private data: DataService,
    private ngZone: NgZone,
    private driverOrderService: DriverOrderService,
    private addressBuilder: AddressBuilder
  ) { }


  orderId: any;
  message: Order;

  public lat = 52.227560;
  public lng = 21.011043;

  public origin: any = { lat: 0, lng: 0 };
  public destination: any = { lat: 0, lng: 0 };

  public distance: any;
  public duration: any;

  private distanceMatrix;
  private geocoder;

  latitude: number;
  longitude: number;
  address: string;
  zoom: number;
  load1: Boolean =false;
  load2: Boolean = false;

  driverOrderFromDb: DriverOrder[] = [];

  ngOnInit() {
    this.getAll();
    this.data.orderId.subscribe(message => this.message = message);
    this.mapsAPILoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder;
      this.distanceMatrix = new google.maps.DistanceMatrixService();
    });
  }

  getAll() {
    this.driverOrderService.getAllDrivers().subscribe(response => {
      this.driverOrderFromDb = response;
      this.driverOrderFromDb.forEach(element => {
        element.address=this.addressBuilder.BuildAddress();
      });
    }, error => {
      console.log(error);
    })
  }

  getDirection(driverorder: DriverOrder) {
    this.load1 = false;
    this.load2 = false;
    this.getAddress(driverorder.address, true);
    this.getAddress(this.message.address, false);
  }

  getDistanceAndTime() {
    this.driverOrderFromDb.forEach(element => {
    const request: google.maps.DistanceMatrixRequest = {
      origins: [element.address],
      destinations: [this.message.address],
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.distanceMatrix.getDistanceMatrix(request, (response, status) => {
      if (status === google.maps.DistanceMatrixStatus.OK &&
        response.rows[0].elements[0].status === google.maps.DistanceMatrixElementStatus.OK
      ) {
        element.distance = response.rows[0].elements[0].distance.text;
        element.time = response.rows[0].elements[0].duration.text;
      }
    });
    });
  }

  getAddress(address: string, originOrDestination: boolean) {
    this.geocoder.geocode({ "address": address }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          if (originOrDestination) {
            const lt = results[0].geometry.location.lat();
            const lng = results[0].geometry.location.lng();
            this.origin = new google.maps.LatLng(lt, lng);
            this.load1=true;
          } else {
            const lt = results[0].geometry.location.lat();
            const lng = results[0].geometry.location.lng();
            this.destination = new google.maps.LatLng(lt, lng);
            this.load2=true;
          }
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

}
