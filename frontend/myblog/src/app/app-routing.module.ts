import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './public/home/index/index.component';
import { AppComponent } from './admin/layouts/app/app.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { RegisterComponent } from './admin/auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { GuestComponent } from './admin/layouts/guest/guest.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'auth', component: GuestComponent,
    children: [
      { path: 'login', component: LoginComponent  },
      { path: 'register', component: RegisterComponent  },
    ]
  },
  {
    path: 'admin', component: AppComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
