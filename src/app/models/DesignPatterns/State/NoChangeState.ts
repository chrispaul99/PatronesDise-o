import { ItemState } from './ItemState';
export class NoChangeState extends ItemState {
    show(): string {
        return 'Sin reservas añadidas recientemente';
    }
}
