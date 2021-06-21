import { SamsungService } from './../../services/samsung.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private samsungProducts: SamsungService) { }

  ngOnInit(): void {
    this.products = this.samsungProducts.getProducts();
  }

}
