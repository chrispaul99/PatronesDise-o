import { Ruta } from '../Prototype/Ruta';
export class RutasFactory{
    static enableFlyweight = true;
    private static VUELO_ITEMS = new Map<string, Ruta>();
    public static crearRuta(nombre: string, fecha: string): Ruta{
        if(this.enableFlyweight && this.VUELO_ITEMS.has(nombre)){
            return this.VUELO_ITEMS.get(nombre);
        }else{
            const rutaItem = new Ruta(nombre, fecha);
            this.VUELO_ITEMS.set(nombre, rutaItem);
            return rutaItem;
        }
    }
}