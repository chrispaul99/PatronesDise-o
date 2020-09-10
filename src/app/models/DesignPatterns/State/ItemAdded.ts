import { ItemState } from './ItemState';
export class ItemAdded extends ItemState {
    show(): string {
        return `Se han añadido reservas en esta sesión`;
    }
}
