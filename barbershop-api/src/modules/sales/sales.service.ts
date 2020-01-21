import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Sale } from './models/sale.interface';
import { SaleDTO } from './models/sale.dto';

@Injectable()
export class SalesService {
  constructor(@InjectModel('Sale') private saleModel: Model<Sale>) {}

  async getSales(): Promise<Sale[]> {
    return await this.saleModel.find();
  }

  async createSale(sale: SaleDTO): Promise<Sale> {
    const newSale = new this.saleModel(sale);
    return newSale.save();
  }
}
