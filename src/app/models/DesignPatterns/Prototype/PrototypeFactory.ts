import { IPrototype } from './IPrototype';
import { Vuelo } from './Vuelo';
import { Ruta } from './Ruta';
export class PrototypeFactory {

    // tslint:disable-next-line: new-parens
    // tslint:disable-next-line: member-ordering
    private static prototypes = new Map<string, IPrototype<Vuelo>>();
    public static getPrototype(prototypeName: string): IPrototype<Vuelo>{
        return this.prototypes.get(prototypeName).deepClone();
    }
    public static addPrototype(name: string , prototype: IPrototype<Vuelo>): void{
        this.prototypes.set(name, prototype);
    }
}
