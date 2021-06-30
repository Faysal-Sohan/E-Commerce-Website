import { ProductsComponent } from './product-slider/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: 'default', component: HomepageComponent },
  { path: '', component: HomepageComponent },
  { path:'product-list/:brandId', component: ProductsComponent },  
  { path: 'product-details/:id', component: ProductDetailsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}