import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reserva } from '../../../../models/DesignPatterns/Singleton/Reserva';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from '../../../../services/reserva.service';
import { Vuelo } from 'src/app/models/DesignPatterns/Prototype/Vuelo';
import { Ruta } from 'src/app/models/DesignPatterns/Prototype/Ruta';
import { PrototypeFactory } from '../../../../models/DesignPatterns/Prototype/PrototypeFactory';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from '../../../../services/auth.service';
import { Ticket } from 'src/app/models/DesignPatterns/Bridge/BridgeImpl/Ticket';
import { AESEncryptAlgorithm } from 'src/app/models/DesignPatterns/Bridge/BridgeEncript/AESEncryptAlgorithm';
import { RutasFactory } from '../../../../models/DesignPatterns/FlyWeight/RutasFactory';
@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent implements OnInit {
  reserva: Reserva;
  title: string;
  vuelos: Vuelo[];
  rutas: Ruta[];
  date: Date;
  index = 0;
  message = '';
  aesImpl = new Ticket(new AESEncryptAlgorithm());
  constructor(private router: Router, private reservaService: ReservaService, private auth: AuthService) { }
  ngOnInit(): void {
    this.vuelos = [];
    this.rutas = [];
    this.reserva = new Reserva();
    this.reserva.pasajero = new Usuario();
    this.reserva.vuelo = new Vuelo();
    this.reserva.ruta = new Ruta();
    this.getvuelos();
    console.log(this.vuelos);
    this.date = new Date();
    this.date.getDate();
    console.log(this.date);
    this.message = this.auth.preferenciaSingleton.leerToken().split('A', 1)[0];
    this.Encriptar(this.message);
    this.reserva.codigo = this.message;
    console.log(this.rutas);
    console.log(this.vuelos);
  }

  onSubmit( form: NgForm ) {

    if ( form.invalid ) { console.log(form); return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.reservaService.reservar( this.reserva )
      .subscribe( resp => {

        console.log(resp);
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          title: 'Correcto',
          text: 'Reserva Registrada correctamente'
        });
        this.router.navigateByUrl('/home');

      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message
        });
      });
  }




    // USO DE PATRON BRIDGE
    Encriptar(mens: string) {
     this.message = this.aesImpl.encryptMessage(mens, 'HG58YZ3CR9123456');
   }
  // PATRON PROTOTYPE
  getvuelos(){
    this.gestionarRutas();
    let vueloGuia = new Vuelo();
    vueloGuia = new Vuelo('AIR-99', 'C99');
    for (let l = 0; l < this.rutas.length - 3; l++){
      const ruta = new Ruta(this.rutas[l].nombre, this.rutas[l].fecha);
      vueloGuia.addRuta(ruta);
    }
    PrototypeFactory.addPrototype(vueloGuia.getNombre(), vueloGuia);
    let vuelo3 = new Vuelo();
    vuelo3 = PrototypeFactory.getPrototype('AIR-99') as Vuelo;
    vuelo3.setNombre('AIR-1000');
    vuelo3.setUbicacion('A2');
    let i = this.rutas.length - 1;
    // tslint:disable-next-line: prefer-const
    // tslint:disable-next-line: forin
    vuelo3.getRutas().forEach(item => {
      item.setNombre(this.rutas[i].nombre);
      item.setFecha(this.rutas[i].fecha);
      i--;
      console.log(item);
    });
    PrototypeFactory.addPrototype(vuelo3.getNombre(), vuelo3);
    let vuelo2 = new Vuelo();
    vuelo2 = PrototypeFactory.getPrototype('AIR-1000') as Vuelo;
    vuelo2.setNombre('AIR-400');
    vuelo2.setUbicacion('I24');
    i = this.rutas.length - 1;
    vuelo3.getRutas().forEach(item => {
      // tslint:disable-next-line: triple-equals
      if (i % 2 == 0) {
        item.setNombre(this.rutas[i].nombre);
      } else {
        item.setNombre(this.rutas[i].nombre);
      }
      item.setFecha(this.rutas[i].fecha);
      i--;
    });
    this.vuelos.push(vueloGuia);
    this.vuelos.push(vuelo3);
    this.vuelos.push(vuelo2);
    }

   // USO DEL PATRON FLYWEIGHT
    gestionarRutas(){
     RutasFactory.enableFlyweight = true;
     this.initArrays();
   }
   initArrays(){
    const rutas = {Rutas: [
      {
        Nombre: 'Madrid',
        fecha: '24/05/2017',
      },
      {
        Nombre: 'Bogota',
        fecha: '10/1/2018',
      },
      {
        Nombre: 'Lima',
        fecha: '11/06/2018',
      },
      {
        Nombre: 'Quito',
        fecha: '24/05/2017',
      },
      {
        Nombre: 'Latacunga',
        fecha: '10/1/2018',
      },
      {
        Nombre: 'Guayaquil',
        fecha: '11/06/2018',
      },
    ]};
    const vuelos = {Vuelos: [
      {
        Nombre: 'AIR-850',
        Ubicacion: 'F14',
      },
      {
        Nombre: 'AIR-550',
        Ubicacion: 'G10',
      },
      {
        Nombre: 'AIR-100',
        Ubicacion: 'H65',
      },
      {
        Nombre: 'AIR-250',
        Ubicacion: 'U5',
      },
      {
        Nombre: 'AIR-001',
        Ubicacion: 'J55',
      },
    ]};
    for(let l = 0; l < vuelos.Vuelos.length;l++){
      let vuelo =  new Vuelo(vuelos.Vuelos[l].Nombre, vuelos.Vuelos[l].Ubicacion);
      this.vuelos.push(vuelo);
    }
    for (let l = 0; l < rutas.Rutas.length; l++){
      const ruta = new Ruta(rutas.Rutas[l].Nombre, rutas.Rutas[l].fecha);
      this.rutas.push(ruta);
    }
   }
   // tslint:disable-next-line: typedef
   getRandomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}
}
