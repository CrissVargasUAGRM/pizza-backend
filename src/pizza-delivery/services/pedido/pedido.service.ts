import { Injectable } from '@nestjs/common';
import { IPedido } from '../IPedido.interface';
import { Pedido } from './dto/Pedido.dto';

@Injectable()
export class PedidoService implements IPedido{

    

    tomarPedido(cantidad: string, cliente: string, pizza: string, total: number, tipoPizza: string): Pedido {
        throw new Error('Method not implemented.');
    }
}
