import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServiceDTO } from './models/service.dto';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  async getServices() {
    try {
      const services = await this.servicesService.getServices();
      return services;
    } catch (error) {
      return error;
    }
  }

  @Post('/create')
  async createBarber(@Body() service: ServiceDTO) {
    try {
      const newService = await this.servicesService.createService(service);
      return newService;
    } catch (error) {
      return error;
    }
  }
}
