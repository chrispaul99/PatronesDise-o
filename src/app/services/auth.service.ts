import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { PreferenciaSingleton } from '../models/DesignPatterns/Singleton/PreferenciaSingleton';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyBfw_M5_a-bT265Rpu-NC-1_o_pDb88yIE';
  preferenciaSingleton: PreferenciaSingleton;
  // Crear nuevo usuario
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]


  // Login
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]


  constructor( private http: HttpClient ) {
    this.preferenciaSingleton = PreferenciaSingleton.getInstance();
    this.preferenciaSingleton.leerToken();
  }


  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: Usuario ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/verifyPassword?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        this.preferenciaSingleton.guardarToken( resp['idToken'] );
        return resp;
      })
    );

  }

  nuevoUsuario( usuario: Usuario ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/signupNewUser?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        this.preferenciaSingleton.guardarToken( resp['idToken'] );
        return resp;
      })
    );

  }

}
