import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{

    constructor(private readonly ProductsService:ProductsService){}
    //##########################    POST METHOD     ###########################
    @Post()
    insertProduct(
       // @Body() completeBody():{title:string, description:string, price:number} //or adding @body alltogether,
     @Body('title') proTitle:string,
     @Body('description') proDesc:string,
     @Body('price') proPrice:number): any
      {

        const generatedId = this.ProductsService.insertProduct(proTitle,proDesc,proPrice);
        return{ id : generatedId } 
     }

     //#####################       GET METHOD      ##############################


     @Get() // It is use while reading the data
     findAllproduct() : any {
         return this.ProductsService.getProduct();
     }


     @Get(':id')
     getProduct(@Param('id') prodId:string,) : any {
            return this.ProductsService.getSingleProduct(prodId);
     }

     
}