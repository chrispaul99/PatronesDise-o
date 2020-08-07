// tslint:disable-next-line: no-empty-interface
export interface IPrototype<T>
{
    // tslint:disable-next-line: typedef
    clone(): T;
    // tslint:disable-next-line: typedef
    deepClone(): T;
}