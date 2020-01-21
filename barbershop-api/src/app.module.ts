import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarbersModule } from './modules/barbers/barbers.module';
import { ServicesModule } from './modules/services/services.module';
import { SalesModule } from './modules/sales/sales.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    BarbersModule,
    ServicesModule,
    SalesModule,
    MongooseModule.forRoot(`mongodb://${process.env.DOMAIN}/barbershop`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
