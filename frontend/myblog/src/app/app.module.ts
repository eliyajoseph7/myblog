import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsComponent } from './public/home/contents/announcements/announcements.component';
import { PostsComponent } from './public/home/contents/posts/posts.component';
import { RelatedComponent } from './public/home/contents/related/related.component';
import { AboutComponent } from './public/about/about/about.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    PostsComponent,
    RelatedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    PublicModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
