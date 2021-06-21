import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    { id:1, productId: 1, productName: "Test1", qty: 4, price: 100},
    { id:1, productId: 3, productName: "Test3", qty: 2, price: 300},
    { id:1, productId: 4, productName: "Test4", qty: 1, price: 50},
    { id:1, productId: 2, productName: "Test2", qty: 5, price: 200},
  ];
  cartTotal = 0;
  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    })
  }

}
