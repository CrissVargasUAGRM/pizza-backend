import { Injectable } from '@nestjs/common';
import { DeliveryDTO } from './dto/Delivery.dto';

@Injectable()
export class DeliveryService {
    
    deliveryData: Array<DeliveryDTO> = [
        {
            id: "1",
            nombre: "Cristhian",
            isFree: true
        },
        {
            id: "2",
            nombre: "Juan",
            isFree: false
        },
        {
            id: "1",
            nombre: "Cristhian",
            isFree: true
        }
    ];
}
