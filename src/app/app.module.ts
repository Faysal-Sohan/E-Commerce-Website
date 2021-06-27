import { AppRoutingModule } from './app-routing.module';
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
import { ProductsComponent } from './product-slider/products/products.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ImageSliderComponent,
    ProductSliderComponent,
    ProductsComponent,
    CartItemComponent,
    CartComponent,
    ProductDetailsComponent,
    HomepageComponent,
  
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
