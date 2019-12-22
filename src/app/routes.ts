import { Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';
import { RegisterComponent } from './register';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'startpage', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-layout/admin-layout.module').then(
        m => m.AdminLayoutModule
      )
  },
  { path: 'startpage', component: StartpageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
]
