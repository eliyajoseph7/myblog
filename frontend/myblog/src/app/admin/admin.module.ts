import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './layouts/app/app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { GuestComponent } from './layouts/guest/guest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { ServiceComponent } from './services/service/service.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidenavComponent,
    GuestComponent,
    HeaderComponent,
    ServiceComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
