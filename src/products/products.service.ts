import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  create(productDto: CreateProductDto) {
    const data = { ...productDto, id: Date.now().toString() }
    this.products.push(data);
    return data
  }
}
