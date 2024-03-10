import { Injectable } from '@nestjs/common';
import { products } from "./data/data";

@Injectable()
export class ProductsService {
  
  findAll() {
    return products;
  }
}
