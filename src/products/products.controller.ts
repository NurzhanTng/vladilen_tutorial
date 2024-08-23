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
  Header,
  Req,
  Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // With express
  // @Get()
  // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response) {
  //   res.status(201).end('Poka')
  //   return 'getAll';
  // }

  @Get()
  getAll() {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remove ${id}`;
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return `Update ${id}`;
  }
}
