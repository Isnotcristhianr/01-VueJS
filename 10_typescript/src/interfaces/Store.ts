
export interface Store{
    nombre: string;
    apellido: string;
    edad: number;
    estudiante: boolean;

    crecer?: () => void;
}