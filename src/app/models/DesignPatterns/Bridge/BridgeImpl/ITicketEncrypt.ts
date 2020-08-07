export interface ITicketEncrypt{
    // tslint:disable-next-line: ban-types
    encryptMessage(message: string, password: string): string;
}
