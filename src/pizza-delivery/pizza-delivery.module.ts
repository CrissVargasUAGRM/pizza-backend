import { Module } from '@nestjs/common';
import { PizzaDeliveryController } from './controllers/pizza-delivery.controller';

@Module({
  controllers: [PizzaDeliveryController]
})
export class PizzaDeliveryModule {}
