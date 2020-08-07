import * as CryptoJS from 'crypto-js';
import { IEncryptAlgorithm } from './IEncryptAlgorithm';
export class AESEncryptAlgorithm implements IEncryptAlgorithm{
    encrypt(message: string, password: string): string {
        // tslint:disable-next-line: prefer-const
        let encrypted = CryptoJS.AES.encrypt(message, password.trim()).toString();
        return encrypted.toString();
    }

}
