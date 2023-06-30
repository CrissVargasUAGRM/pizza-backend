import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('pizza-delivery')
@ApiTags('Pizza Delivery EndPoints')
export class PizzaDeliveryController {

    @Post('/armar-pizza')
    createPizza(){
        return 'Pizza armada';
    }

    @Post('/enviar-pedido')
    registrarPedido(){
        return 'registrar pedido'
    }

    @Get('/ver-pedido')
    getPedidoPizza(){
        return 'ver el pedido'
    }
}
