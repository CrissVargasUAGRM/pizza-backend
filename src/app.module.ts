import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaDeliveryModule } from './pizza-delivery/pizza-delivery.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PizzaDeliveryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
