import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionDriversRoutingModule } from './section-drivers-routing.module';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { SectionDriversComponent } from './section-drivers.component';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { DataService } from '@/_services/data.service';


@NgModule({
  declarations: [
    AddDriverComponent,
    SectionDriversComponent,
    UpdateDriverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SectionDriversRoutingModule
  ],
  providers: [
   DataService
  ],
  
})
export class SectionDriversModule { }
