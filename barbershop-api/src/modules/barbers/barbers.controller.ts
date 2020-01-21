import { Controller, Get, Post, Body } from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { BarberDTO } from './models/barber.dto';

@Controller('barbers')
export class BarbersController {
  constructor(private barbesService: BarbersService) {}

  @Get()
  async getBarbers() {
    try {
      const barbers = await this.barbesService.getBarbers();
      return barbers;
    } catch (error) {
      return error;
    }
  }

  @Post('/create')
  async createBarber(@Body() barber: BarberDTO) {
    try {
      const newBarber = await this.barbesService.createBarber(barber);
      return newBarber;
    } catch (error) {
      return error;
    }
  }
}
