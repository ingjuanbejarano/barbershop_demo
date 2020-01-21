import { Module } from '@nestjs/common';
import { BarbersController } from './barbers.controller';
import { BarbersService } from './barbers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BarberSchema } from './models/barber.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Barber', schema: BarberSchema }])
  ],
  controllers: [BarbersController],
  providers: [BarbersService]
})
export class BarbersModule {}
