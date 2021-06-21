import { Injectable } from '@angular/core';
import { Product } from '../product-slider/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class SamsungService {
  products: Product[] = [
    new Product("Samsung Galaxy A52 4G","33,999","../assets/images/samsung-products/samsung-galaxy-a52-4g-10.jpg"),
    new Product("Samsung Galaxy A52 5G","35,999","../assets/images/samsung-products/samsung-galaxy-a52-5g-10.jpg"),
    new Product("Samsung Galaxy S20 FE","64,999","../assets/images/samsung-products/samsung-galaxy-s20-fe-4g-1.jpg"),
    new Product("Samsung Galaxy S21 Ultra","119,999","../assets/images/samsung-products/samsung-galaxy-s21-ultra-5g-1.jpg"),
  ];
  constructor() { }
  getProducts():Product[] {
    return this.products;
  }
}
