import {ITicketEncrypt } from './ITicketEncrypt';
import { IEncryptAlgorithm } from '../BridgeEncript/IEncryptAlgorithm';
export class Ticket implements ITicketEncrypt{
    private encryptAlgorith: IEncryptAlgorithm ;
    constructor(encryptAlgorith: IEncryptAlgorithm){
    this.encryptAlgorith = encryptAlgorith;
    }
    // tslint:disable-next-line: ban-types
    encryptMessage(message: string, password: string): string {
        return this.encryptAlgorith.encrypt(message, password);
    }

}
