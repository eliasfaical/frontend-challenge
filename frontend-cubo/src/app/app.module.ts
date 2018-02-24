import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UICarouselModule } from 'ui-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerHeroComponent } from './banner-hero/banner-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerHeroComponent
  ],
  imports: [
    BrowserModule,
    UICarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
