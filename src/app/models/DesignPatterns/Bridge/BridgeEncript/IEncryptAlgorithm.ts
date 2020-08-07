export interface IEncryptAlgorithm{
    encrypt(message: string, password: string): string;
}
