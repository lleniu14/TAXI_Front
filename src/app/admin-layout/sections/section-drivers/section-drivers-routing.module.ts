import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionDriversComponent } from './section-drivers.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';


const routes: Routes = [  {
  path: '',
  component: SectionDriversComponent
},
{
  path: 'add',
  component: AddDriverComponent
},
{
  path: 'update',
  component: UpdateDriverComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionDriversRoutingModule { }
