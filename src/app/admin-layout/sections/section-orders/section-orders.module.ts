import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionOrdersRoutingModule } from './section-orders-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { SectionOrdersComponent } from './section-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateOrderComponent } from './update-order/update-order.component';


@NgModule({
  declarations: [
    AddOrderComponent,
    SectionOrdersComponent,
    UpdateOrderComponent,
  ],
  imports: [
    CommonModule,
    SectionOrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SectionOrdersModule { }
