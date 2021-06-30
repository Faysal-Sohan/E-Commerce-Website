import { ProductDetails } from './../../product-details.model';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productId: any ;
  public products!: ProductDetails;
  constructor(private route: ActivatedRoute, private AllProducts: ProductsService) { }

  ngOnInit(): void {
    let name = this.route.snapshot.paramMap.get('id');
    this.productId = name;
    this.products = this.AllProducts.getOneProduct(name!);
    console.log(this.products)
  }

}
