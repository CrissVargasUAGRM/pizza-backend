export class DeliveryDTO {
    id: string;
    nombre: string;
    isFree: boolean;

    constructor(id: string, nombre: string, isFree: boolean){
        this.id = id;
        this.nombre = nombre;
        this.isFree = isFree;
    }
}