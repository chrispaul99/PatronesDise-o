import { ITransaction } from './ITransaction';
export class TransactionMethod {

    constructor(private strategy: ITransaction) {}

    triggerTransaction(argument: any): void {
        return this.strategy.doTransaction(argument);
    }
}
