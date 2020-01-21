import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSchema } from './models/service.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Service', schema: ServiceSchema }])
  ],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule {}
