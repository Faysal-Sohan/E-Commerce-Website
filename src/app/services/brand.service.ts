import { Brand } from './../brand.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  brands: Brand[]=[
    new Brand(1,"Apple",'../assets/images/product-brands-mobile/apple.jpg'),
    new Brand(2,"Samsung",'../assets/images/product-brands-mobile/samsung.jpg'),
    new Brand(3,"Oppo",'../assets/images/product-brands-mobile/oppo.jpg'),
    new Brand(4,"OnePlus",'../assets/images/product-brands-mobile/oneplus.jpg'),
    new Brand(5,"MI",'../assets/images/product-brands-mobile/mi.jpg')
  ];

  constructor() { }
  getBrand(id:any){
    let i = 0;
    for(i=0;i<4;i++){
      if(this.brands[i].brandId===id){
        break;
      }
    }
    return this.brands[i];
  }
}
