import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Barber } from './models/barber.interface';
import { BarberDTO } from './models/barber.dto';

@Injectable()
export class BarbersService {
  constructor(@InjectModel('Barber') private barberModel: Model<Barber>) {}

  async getBarbers(): Promise<Barber[]> {
    return await this.barberModel.find();
  }

  async createBarber(barber: BarberDTO): Promise<Barber> {
    const newBarber = new this.barberModel(barber);
    return newBarber.save();
  }
}
