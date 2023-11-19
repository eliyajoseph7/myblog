import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './public/home/index/index.component';
import { NavbarComponent } from './public/home/navbar/navbar.component';
import { AnnouncementsComponent } from './public/home/contents/announcements/announcements.component';
import { PostsComponent } from './public/home/contents/posts/posts.component';
import { RelatedComponent } from './public/home/contents/related/related.component';
import { AboutComponent } from './public/about/about.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { RegisterComponent } from './admin/auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { SidenavComponent } from './admin/layouts/sidenav/sidenav.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    AnnouncementsComponent,
    PostsComponent,
    RelatedComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
