import { ProductDetails } from './../product-details.model';
import { Product } from '../product-slider/products/product.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productDetails: ProductDetails[] = [
    new ProductDetails(1,1,"Apple iPhone 12 Pro Max",140000,'../assets/images/products/apple-iphone-12-pro-max-1.jpg',"text"),
    new ProductDetails(1,2,"Apple iPhone 12 Pro",130000,'../assets/images/products/apple-iphone-12-pro-r1.jpg',"text"),
    new ProductDetails(1,3,"Apple iPhone 12",120000,'../assets/images/products/apple-iphone-12-r1.jpg',"text"),
    new ProductDetails(1,4,"Apple iPhone 11",110000,'../assets/images/products/apple-iphone-11-1.jpg',"text"),
    new ProductDetails(2, 5, "Samsung Galaxy A52 4G", 33999, "../assets/images/products/samsung-galaxy-a52-4g-10.jpg", "test1"),
    new ProductDetails(2, 6, "Samsung Galaxy A52 5G", 35999, "../assets/images/products/samsung-galaxy-a52-5g-10.jpg", "test2"),
    new ProductDetails(2, 7, "Samsung Galaxy S20 FE", 64999, "../assets/images/products/samsung-galaxy-s20-fe-4g-1.jpg", "test3"),
    new ProductDetails(2, 8, "Samsung Galaxy S21 Ultra", 119999, "../assets/images/products/samsung-galaxy-s21-ultra-5g-1.jpg", "test4"),
    new ProductDetails(3, 9, "Oppo Reno 6 Pro Plus", 68000, "../assets/images/products/oppo-reno5-5g-1.jpg", "test4"),
    new ProductDetails(3, 10, "Oppo Reno 5 5G", 35000, "../assets/images/products/oppo-reno6-pro-plus-1.jpg", "test4"),
    new ProductDetails(3, 11, "Oppo Find X3 Pro", 65000, "../assets/images/products/oppo-find-x3-pro-4.jpg", "test4"),
    new ProductDetails(3, 12, "Oppo F19 Pro Plus", 27000, "../assets/images/products/oppo-f19-pro-plus-r.jpg", "test4"),
    new ProductDetails(3, 13, "Oppo A54", 23000, "../assets/images/products/oppo-a54-1.jpg", "test4"),
  ]

  cartItems: ProductDetails[] = [];

  products: ProductDetails[] = [];
  constructor() { }
  getProducts(id: number): ProductDetails[] {
    for (let i = 0; i < this.productDetails.length; i++) {
      if (id === this.productDetails[i].barndId) {
        this.products.push(this.productDetails[i])
      }
    }
    return this.products;
  }
  getOneProduct(productName: string): ProductDetails {
    let i = 0;
    for (i = 0; i < this.productDetails.length; i++) {
      if (this.productDetails[i].name === productName) {
        break;
      }
    }
    return this.productDetails[i];
  }
  addToCart(id: any) {
    for (let i = 0; i < this.productDetails.length; i++) {
      if (id === this.productDetails[i].id) {
        this.cartItems.push(this.productDetails[i]);
      }
    }
  }
  getCartItems(): ProductDetails[] {
    return this.cartItems;
  }
}

