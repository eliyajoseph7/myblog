import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './public/home/index/index.component';
import { AppComponent } from './admin/layouts/app/app.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { RegisterComponent } from './admin/auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { GuestComponent } from './admin/layouts/guest/guest.component';
import { authGuard } from './guards/auth-guard/auth.guard';
import { loggedinGuard } from './guards/loggedin-guard/loggedin.guard';
import { MainComponent } from './public/layouts/main/main.component';
import { AboutComponent } from './public/about/about/about.component';
import { ServiceComponent } from './admin/services/service/service.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'about-me', component: AboutComponent },
    ]
  },
  {
    path: 'auth', component: GuestComponent, canActivate: [loggedinGuard],
    children: [
      { path: 'login', component: LoginComponent  },
      { path: 'create-account', component: RegisterComponent  },
    ]
  },
  {
    path: 'admin', component: AppComponent, canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'services', component: ServiceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
