import { Vuelo } from '../Prototype/Vuelo';
import { Usuario } from '../../usuario.model';
import { Ruta } from '../Prototype/Ruta';
export class Reserva{
    idReserva: string;
    fecha: string;
    vuelo: Vuelo;
    ruta: Ruta;
    pasajero: Usuario;
    codigo: string;
}