import { IEncryptAlgorithm } from './IEncryptAlgorithm';
import * as CryptoJS from 'crypto-js';

export class NoEncryptAlgorithm implements IEncryptAlgorithm{
    encrypt(message: string, password?: string): string {
        const encrypted = CryptoJS.AES.desencrypt(message, password.trim()).toString();
        return encrypted.toString();
    }
}
