import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { BannerComponent } from './home/contents/banner/banner.component';
import { IndexComponent } from './home/index/index.component';



@NgModule({
  declarations: [
    BannerComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class PublicModule { }
