import { ItemState } from './ItemState';
import { NoChangeState } from './NoChangeState';
export class Item {
    private objStateItem: ItemState;
    constructor() {
        this.objStateItem = new NoChangeState();
    }

    setState(objStateItem: ItemState): void {
        this.objStateItem = objStateItem;
    }

    show(): string {
        return this.objStateItem.show();
    }
}
