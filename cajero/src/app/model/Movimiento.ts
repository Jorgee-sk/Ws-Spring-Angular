import { Cuenta } from "./Cuenta";

export class Movimiento {
    idMovimiento: Number;
    cuenta: Cuenta;
    fecha: Date;
    cantidad: Number;
    operacion: string;
}