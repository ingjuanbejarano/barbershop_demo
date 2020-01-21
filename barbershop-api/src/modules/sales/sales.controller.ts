import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SaleDTO } from './models/sale.dto';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Get()
  async getSales() {
    try {
      const sales = await this.salesService.getSales();
      return sales;
    } catch (error) {
      return error;
    }
  }

  @Post('/create')
  async createSale(@Body() sale: SaleDTO) {
    try {
      const newSale = await this.salesService.createSale(sale);
      return newSale;
    } catch (error) {
      return error;
    }
  }
}
