export class PreferenciaSingleton{
    private static instancia: PreferenciaSingleton;
    constructor(){
    }
    // tslint:disable-next-line: align
    // tslint:disable-next-line: no-unused-expression
    static getInstance( ): PreferenciaSingleton{
        if (this.instancia == null){
          this.createInstance();
        }
        return this.instancia;
    }
    static createInstance(): void {
        if (this.instancia == null) {
          this.instancia = new PreferenciaSingleton();
        }
    }

    getColorSecondary(): string {
      return localStorage.getItem('secundario') ?? 'primary';
    }

    setColorSecondary(sedondary: string): void {
      localStorage.setItem('secundario', sedondary);
    }
}
