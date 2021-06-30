export class Brand {
    brandId: any;
    brandName!: string;
    brandImage!: string;

    constructor(brandId: any, brandName: string, brandImage: string){
        this.brandId = brandId;
        this.brandName = brandName;
        this.brandImage = brandImage;
    }

}
