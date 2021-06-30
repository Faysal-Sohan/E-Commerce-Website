export class Product {
    id!: number;
    name!: string;
    price!: string;
    imagePath!: string;

    constructor(id:number,name: string, price:string, imagePath:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
    }
}