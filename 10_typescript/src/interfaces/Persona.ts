export interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    estudiante: boolean;

    crecer?: () => void;
//  imprimir(): void;
}