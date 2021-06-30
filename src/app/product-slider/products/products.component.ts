import { BrandService } from './../../services/brand.service';
import { Brand } from './../../brand.model';
import { ProductDetails } from './../../product-details.model';
import { ActivatedRoute } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: ProductDetails[] = [];
  brand!: Brand;
  public brandId: any;
  constructor(private AllProducts: ProductsService, 
    private router: Router, 
    private route: ActivatedRoute,
    private brandDetails: BrandService,
    private msg: MessengerService) { }


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('brandId');
    console.log(typeof(id));
    this.brandId = parseInt(id!);
    this.products = this.AllProducts.getProducts(this.brandId);
    this.brand = this.brandDetails.getBrand(this.brandId);
  }
  onClick(product: Product){
    this.router.navigate(['/product-details',product.name]);
  }
  handleAddToCart(product: ProductDetails) {
    this.msg.sendMsg(product)
  }

}
