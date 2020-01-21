import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleSchema } from './models/sale.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }])],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
