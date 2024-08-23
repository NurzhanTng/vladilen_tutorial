import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
  Redirect,
  HttpCode,
  HttpStatus,
  Header, Req, Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {

  // With express
  // @Get()
  // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response) {
  //   res.status(201).end('Poka')
  //   return 'getAll';
  // }

  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `getOne ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title: ${createProductDto.title}. Price: ${createProductDto.price}`
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return `Remove ${id}`
  }

  @Put(":id")
  update(@Body() updateProductDto: UpdateProductDto, @Param("id") id: string ) {
    return `Update ${id}`
  }
}
