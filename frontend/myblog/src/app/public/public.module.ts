import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { BannerComponent } from './home/contents/banner/banner.component';
import { IndexComponent } from './home/index/index.component';
import { MainComponent } from './layouts/main/main.component';
import { RouterModule } from '@angular/router';
import { AboutHeaderComponent } from './about/contents/about-header/about-header.component';
import { AboutComponent } from './about/about/about.component';
import { ServicesComponent } from './home/contents/services/services.component';



@NgModule({
  declarations: [
    BannerComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    AboutHeaderComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class PublicModule { }
