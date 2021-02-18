import { Product } from "./product.model";
export declare class ProductsService {
    private product;
    insertProduct(title: string, description: string, price: number): string;
    getProduct(): Product[];
    getSingleProduct(ProductId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
}
