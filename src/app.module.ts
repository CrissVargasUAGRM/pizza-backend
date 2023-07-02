import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaDeliveryModule } from './pizza-delivery/pizza-delivery.module';
import { IngredientesService } from './pizza-delivery/services/ingredientes/ingredientes.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PizzaDeliveryModule
  ],
  controllers: [AppController],
  providers: [AppService, IngredientesService],
})
export class AppModule {}
