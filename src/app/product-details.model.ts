export class ProductDetails {
    barndId: any;
    id: any;
    name!: string;
    price!: string;
    imagePath!: string;
    details!: string;

    constructor(brandId:any,id:any,name: string, price:string, imagePath:string, details: string){
        this.barndId = brandId;
        this.id = id;
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
        this.details = details;
    }
}