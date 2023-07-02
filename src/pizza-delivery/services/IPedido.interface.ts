import { Pedido } from "./pedido/dto/Pedido.dto";

export interface IPedido {
    tomarPedido(cantidad: string, cliente: string, pizza: string, total: number, tipoPizza: string): Pedido;
}
