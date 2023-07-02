import { Injectable } from '@nestjs/common';
import { IIngrediente } from '../IIngrediente.interface';
import { IngredienteDTO } from '../pizza/dto/Ingrediente.dto';

@Injectable()
export class IngredientesService implements IIngrediente{

    listIngredientes: Array<IngredienteDTO> = [
        {
            id: "1",
            nombre: "salsa de tomate",
            unidad: "gramos",
            cantidad: 100000,
            costo: 1000
        },
        {
            id: "2",
            nombre: "queso",
            unidad: "gramos",
            cantidad: 100000,
            costo: 10000
        },
        {
            id: "3",
            nombre: "champiñones",
            unidad: "gramos",
            cantidad: 100000,
            costo: 1000
        },
        {
            id: "4",
            nombre: "pimientos",
            unidad: "gramos",
            cantidad: 100000,
            costo: 100000
        },
        {
            id: "5",
            nombre: "tocino",
            unidad: "gramos",
            cantidad: 10000,
            costo: 10000
        },
        {
            id: "6",
            nombre: "carne",
            unidad: "gramos",
            cantidad: 10000,
            costo: 10000
        },
        {
            id: "7",
            nombre: "choclo",
            unidad: "gramos",
            cantidad: 10000,
            costo: 10000
        },
        {
            id: "8",
            nombre: "cebolla",
            unidad: "gramos",
            cantidad: 10000,
            costo: 10000
        },
        {
            id: "9",
            nombre: "queso roquefford",
            unidad: "gramos",
            cantidad: 10000,
            costo: 10000
        },
        {
            id: "10",
            nombre: "queso suizo",
            unidad: "gramos",
            cantidad: 10000,
            costo: 10000
        },
        {
            id: "11",
            nombre: "queso cheddar",
            unidad: "gramos",
            cantidad: 10000,
            costo: 10000
        },
        {
            id: "12",
            nombre: "que criollo",
            unidad: "gramos",
            cantidad: 10000,
            costo: 10000
        }
    ];

    obtenerIngrediente(id: string): IngredienteDTO {
        const IngredienteDTO = this.listIngredientes.map((item) -> {
            
        });
        throw new Error('Method not implemented.');
    }
}
