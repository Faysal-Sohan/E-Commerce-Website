import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { ProductDetails } from '../product-details.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductDetails[] = [];
  cartTotal = 0;
  cartProducts: Cart[] = [];
  constructor(private items: ProductsService) { }

  ngOnInit(): void {
    this.cartItems = this.items.getCartItems();
    this.cartDisplay();
    this.totalPrice();
  }

  cartDisplay() {
    let productExists = false;
    let qtyAdded = false;
    for (let i in this.cartItems) {
      if (!productExists) {
        this.cartProducts.push({
          productId: this.cartItems[i].id,
          productName: this.cartItems[i].name,
          qty: 1,
          price: this.cartItems[i].price,
        })
        productExists = true;
      }
      else {
        qtyAdded = false;
        for (let j in this.cartProducts) {
          if (this.cartItems[i].id === this.cartProducts[j].productId) {
            this.cartProducts[j].qty++;
            qtyAdded = true;
            break;
          }
        }
        if (!qtyAdded) {
          this.cartProducts.push({
            productId: this.cartItems[i].id,
            productName: this.cartItems[i].name,
            qty: 1,
            price: this.cartItems[i].price,
          })
        }
      }
    }
  }

  totalPrice() {
    for (let i in this.cartProducts) {
      this.cartTotal += this.cartProducts[i].price * this.cartProducts[i].qty;
    }
  }

}