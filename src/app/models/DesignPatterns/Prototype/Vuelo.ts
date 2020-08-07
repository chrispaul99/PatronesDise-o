import { IPrototype } from './IPrototype';
import { Ruta } from './Ruta';

export class Vuelo implements IPrototype<Vuelo> {
    nombre: string;
    ubicacion: string;
    rutas: Ruta[] = [];
    constructor(nombre?: string, ubicacion?: string){
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }
    clone(): Vuelo {
        let clone = new Vuelo(this.nombre, this.ubicacion);
        clone.setRutas(this.rutas);
        return clone;
    }
    deepClone(): Vuelo {
        // tslint:disable-next-line: prefer-const
        let cloneRutaes: Ruta[] = [];
        this.rutas.forEach(element => {
            let cloneRuta = element.clone();
            cloneRutaes.push(cloneRuta);
        });
        let clone = new Vuelo(this.nombre,this.ubicacion);
        clone.setRutas(cloneRutaes);
        return clone;
    }

    getRutas(): Ruta[]{
        return this.rutas;
    }

    // tslint:disable-next-line: typedef
    setRutas(rutas: Ruta[]) {
        this.rutas = rutas;
    }
    getNombre(): string{
        return this.nombre;
  }
  // tslint:disable-next-line: typedef
  setNombre(nombre: string) {
        this.nombre = nombre;
  }
   getUbicacion(): string {
        return this.ubicacion;
  }
  setUbicacion(ubicacion: string) {
        this.ubicacion = ubicacion;
  }
  addRuta(ruta: Ruta){
        this.rutas.push(ruta);
    }

  }
