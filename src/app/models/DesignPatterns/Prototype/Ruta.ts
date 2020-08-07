import { IPrototype } from "./IPrototype";

export class Ruta implements IPrototype<Ruta>{

    nombre: string;
    fecha: string;

    constructor(ruta?: string, fecha?: string){
        this.nombre = ruta;
        this.fecha = fecha;
    }
  clone(): Ruta {
    return new Ruta(this.nombre,this.fecha,);
  }
  deepClone(): Ruta {
    return this.clone();
  }
    getNombre(): string{
        return this.nombre;
      }
      setNombre(nombre: string){
        this.nombre = nombre;
      }
      getFecha(): string{
        return this.fecha;
      }
      setFecha(fecha: string){
        this.fecha = fecha;
      }
  }
