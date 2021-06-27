import { Injectable } from '@angular/core';
import { ProductDetails } from '../product-details.model';

@Injectable({
  providedIn: 'root'
})
export class SamsungProductDetailsService {
  productDetails: ProductDetails[] = [
    new ProductDetails(1,"Samsung Galaxy A52 4G","33,999","../assets/images/samsung-products/samsung-galaxy-a52-4g-10.jpg","test1"),
    new ProductDetails(2,"Samsung Galaxy A52 5G","35,999","../assets/images/samsung-products/samsung-galaxy-a52-5g-10.jpg","test2"),
    new ProductDetails(3,"Samsung Galaxy S20 FE","64,999","../assets/images/samsung-products/samsung-galaxy-s20-fe-4g-1.jpg","test3"),
    new ProductDetails(4,"Samsung Galaxy S21 Ultra","119,999","../assets/images/samsung-products/samsung-galaxy-s21-ultra-5g-1.jpg","test4"),
  ]
  constructor() { }
  getProductDetails(id: number) {
  
  }
}
