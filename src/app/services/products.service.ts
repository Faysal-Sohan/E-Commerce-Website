import { ProductDetails } from './../product-details.model';
import { Product } from '../product-slider/products/product.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productDetails: ProductDetails[] = [
    new ProductDetails(1,1,"Samsung Galaxy A52 4G","33,999","../assets/images/products/samsung-galaxy-a52-4g-10.jpg","test1"),
    new ProductDetails(1,2,"Samsung Galaxy A52 5G","35,999","../assets/images/products/samsung-galaxy-a52-5g-10.jpg","test2"),
    new ProductDetails(1,3,"Samsung Galaxy S20 FE","64,999","../assets/images/products/samsung-galaxy-s20-fe-4g-1.jpg","test3"),
    new ProductDetails(1,4,"Samsung Galaxy S21 Ultra","119,999","../assets/images/products/samsung-galaxy-s21-ultra-5g-1.jpg","test4"),
  ]

  cartItems: ProductDetails[]=[];

  products: ProductDetails[] = [];
  constructor() { }
  getProducts(id: number): ProductDetails[] {
    for(let i = 0;i<4;i++){
      if(id===this.productDetails[i].barndId){
        this.products.push(this.productDetails[i])
      }
    }
    return this.products;
  }
  getOneProduct(productName:string): ProductDetails{
    let i = 0;
    for(i=0;i<4;i++){
      if(this.productDetails[i].name===productName){
        break;
      }
    }
    return this.productDetails[i];
  }
  addToCart(id:any){
    for(let i = 0;i<4;i++){
      if(id===this.productDetails[i].id){
        this.cartItems.push(this.productDetails[i]);
      }
    }
  }
  getCartItems():ProductDetails[]{
    return this.cartItems;
  }
}
    
