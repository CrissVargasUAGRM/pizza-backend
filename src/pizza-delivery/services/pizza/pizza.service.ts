import { Injectable } from '@nestjs/common';
import { IPizza } from '../IPizza.interface';
import { PizzaDTO } from './dto/Pizza.dto';

@Injectable()
export class PizzaService implements IPizza{



    createPizzaPreEstablecida(nombrePizza: string): Promise<PizzaDTO> {
        throw new Error('Method not implemented.');
    }
}
