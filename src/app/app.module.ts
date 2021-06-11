import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './components/slider/slider.component';
import { ImageSliderComponent } from './components/slider/image-slider/image-slider.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductSliderComponent } from './product-slider/product-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ImageSliderComponent,
    ProductSliderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatCarouselModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
