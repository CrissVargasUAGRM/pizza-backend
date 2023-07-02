import { PizzaDTO } from "./pizza/dto/Pizza.dto";

export interface IPizza {
    createPizzaPreEstablecida(nombrePizza: string): Promise<PizzaDTO>;
}