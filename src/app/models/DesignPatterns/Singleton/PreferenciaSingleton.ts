export class PreferenciaSingleton{
    private static instancia: PreferenciaSingleton;
    userToken: string;
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
    guardarToken( idToken: string ) {

      this.userToken = idToken;
      localStorage.setItem('token', idToken);
  
      let hoy = new Date();
      hoy.setSeconds( 3600 );
  
      localStorage.setItem('expira', hoy.getTime().toString() );
    }
    leerToken() {
  
      if ( localStorage.getItem('token') ) {
        this.userToken = localStorage.getItem('token');
      } else {
        this.userToken = '';
      }
  
      return this.userToken;
  
    }
  
  
    estaAutenticado(): boolean {
  
      if ( this.userToken.length < 2 ) {
        return false;
      }
  
      const expira = Number(localStorage.getItem('expira'));
      const expiraDate = new Date();
      expiraDate.setTime(expira);
  
      if ( expiraDate > new Date() ) {
        return true;
      } else {
        return false;
      }
  
  
    }
}
