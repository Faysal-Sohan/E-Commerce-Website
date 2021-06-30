import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

import { ProductDetails } from '../product-details.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductDetails[] = [];
  cartTotal = 0;
  constructor(private items: ProductsService) { }

  ngOnInit(): void {
    this.cartItems= this.items.getCartItems();
    console.log(this.cartItems);
  }
}