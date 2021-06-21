export class Product {
    name!: string;
    price!: string;
    imagePath!: string;

    constructor(name: string, price:string, imagePath:string){
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
    }
}