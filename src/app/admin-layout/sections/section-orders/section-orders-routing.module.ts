import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionOrdersComponent } from './section-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';


const routes: Routes = [{
  path: '',
  component: SectionOrdersComponent
},
{
  path: 'add',
  component: AddOrderComponent
},
{
  path: 'update',
  component: UpdateOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionOrdersRoutingModule { }
