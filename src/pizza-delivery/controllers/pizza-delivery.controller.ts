import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as request from 'supertest';
import { PizzaEstablecidaRequest } from '../request/Pizza.preestablecida.request';
import { PedidoRequest } from '../request/PedidoDTO.request.dto';

@Controller('pizza-delivery')
@ApiTags('Pizza Delivery EndPoints')
export class PizzaDeliveryController {

    @Post('/armar-pizza-preestablecida')
    createPizza(@Body() request: PizzaEstablecidaRequest){
        return 'Pizza armada';
    }

    @Post('/armar-pizza-personalizada')
    createPizzaPersonalizada(@Body() request: PizzaEstablecidaRequest){
        return 'Pizza armada';
    }

    @Post('/enviar-pedido')
    registrarPedido(@Body() request: PedidoRequest){
        return 'registrar pedido';
    }

    @Get('/ver-pedido')
    getPedidoPizza(){
        return 'ver el pedido';
    }
}
