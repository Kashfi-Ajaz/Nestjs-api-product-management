import { Injectable, NotFoundException } from "@nestjs/common";
import {Product} from "./product.model"


@Injectable()
export class ProductsService{

private product : Product[]=[];

insertProduct(title: string,description: string, price: number){// new method to insert product which take 4 parameters
    const ProId = new Date().toString()
    const newProduct = new Product(ProId,title, description, price);// creating object of class Product(this class is define in product.model.ts)
    this.product.push(newProduct);
    return ProId;// Here, we are returning the product id.
}

getProduct(){
    return [...this.product]; // Here we use spread operator(ie, ...) this will extract all the data of product object

}


getSingleProduct(ProductId : string){
    const product = this.product.find( (prod) => prod.id === ProductId);
    if(!product){
        throw new NotFoundException('Could not find product. Sorry!!!');
    }
return {...product};

       

}

}