import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionMapComponent } from './sections/section-map/section-map.component';
import { SectionCustomersComponent } from './sections/section-customers/section-customers.component';
import { SectionStatsComponent } from './sections/section-stats/section-stats.component';
import { SectionRouteComponent } from './sections/section-route/section-route.component'; 
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmDirectionModule } from 'agm-direction';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionDriversModule } from './sections/section-drivers/section-drivers.module';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavbarComponent ,
    SidebarComponent,
    SectionCustomersComponent,
    SectionRouteComponent,
    SectionStatsComponent,
    SectionMapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminLayoutRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBEO23UGEveqhsXwHwGKa6WPbnklPeNAUc',
      libraries: ['places', 'geometry']
    }),
    AgmDirectionModule,
    SectionDriversModule
  ]
})
export class AdminLayoutModule { }
