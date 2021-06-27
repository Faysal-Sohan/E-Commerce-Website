export class ProductDetails {
    id!: number;
    name!: string;
    price!: string;
    imagePath!: string;
    details!: string;

    constructor(id:number,name: string, price:string, imagePath:string, details: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
        this.details = details;
    }
}