import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly ProductsService;
    constructor(ProductsService: ProductsService);
    insertProduct(proTitle: string, proDesc: string, proPrice: number): any;
    findAllproduct(): any;
    getProduct(prodId: string): any;
}
