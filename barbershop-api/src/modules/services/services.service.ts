import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './models/service.interfce';
import { ServiceDTO } from './models/service.dto';

@Injectable()
export class ServicesService {
  constructor(@InjectModel('Service') private serviceModel: Model<Service>) {}

  async getServices(): Promise<Service[]> {
    return await this.serviceModel.find();
  }

  async createService(service: ServiceDTO): Promise<Service> {
    const newService = new this.serviceModel(service);
    return newService.save();
  }
}
