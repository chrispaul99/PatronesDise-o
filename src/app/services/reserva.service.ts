import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../models/DesignPatterns/Singleton/Reserva';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  ban: boolean;
  private url = 'https://reservavuelos-89719.firebaseio.com';
  private apikey = 'AIzaSyBfw_M5_a-bT265Rpu-NC-1_o_pDb88yIE';
  constructor(private  http: HttpClient) { }

  list(){
    return this.http.get(`${this.url}/Reserva.json`).pipe(
      map(this.crearArreglo)
    );
  }
  reservar(reserva: Reserva){
    return this.http.post(`${this.url}/Reserva.json`, reserva);
  }

  /* delete() {
    return this.http.delete(`$_url/Reserva/$id.json?auth=${ _prefs.token }';
    final resp = await http.delete(url);`);
  } */
  private crearArreglo(res: object){
    const reservas: Reserva[] = [];
    Object.keys(res).forEach(key => {
      const reserva: Reserva = res[key];
      reserva.idReserva = key;
      reservas.push(reserva);
    });
    return reservas;
  }

  setBan(bn: boolean): void {
    this.ban = bn;
  }

  getBan(): boolean {
    return this.ban;
  }
}
