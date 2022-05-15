import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  @HttpCode(200)
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getById(id);
  }

  @Post()
  create(@Body() dto: ProductDto) {
    return this.productService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: ProductDto) {
    return this.productService.update(id, dto);
  }
}
