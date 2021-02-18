"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductsService = class ProductsService {
    constructor() {
        this.product = [];
    }
    insertProduct(title, description, price) {
        const ProId = new Date().toString();
        const newProduct = new product_model_1.Product(ProId, title, description, price);
        this.product.push(newProduct);
        return ProId;
    }
    getProduct() {
        return [...this.product];
    }
    getSingleProduct(ProductId) {
        const product = this.product.find((prod) => prod.id === ProductId);
        if (!product) {
            throw new common_1.NotFoundException('Could not find product. Sorry!!!');
        }
        return Object.assign({}, product);
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map