import { IngredienteDTO } from "./pizza/dto/Ingrediente.dto";

export interface IIngrediente {
    obtenerIngrediente(id: string): IngredienteDTO;
}