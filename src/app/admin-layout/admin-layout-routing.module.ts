import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionMapComponent } from './sections/section-map/section-map.component';
import { SectionDriversComponent } from './sections/section-drivers/section-drivers.component';
import { SectionCustomersComponent } from './sections/section-customers/section-customers.component';
import { SectionStatsComponent } from './sections/section-stats/section-stats.component';
import { SectionRouteComponent } from './sections/section-route/section-route.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { AuthGuard } from '@/_helpers/auth.guard';


const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, canActivate:[AuthGuard], children: [
      { path: 'orders', loadChildren: () => import('./sections/section-orders/section-orders.module').then(m => m.SectionOrdersModule) },
      { path: 'map', component: SectionMapComponent },
      { path: 'customers', component: SectionCustomersComponent },
      { path: 'stats', component: SectionStatsComponent },
      { path: 'route', component: SectionRouteComponent },
      { path: 'drivers', loadChildren: () => import('./sections/section-drivers/section-drivers.module').then(m => m.SectionDriversModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
