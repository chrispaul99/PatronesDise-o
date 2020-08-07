import { Component, OnInit } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Vuelo } from 'src/app/models/DesignPatterns/Prototype/Vuelo';
import { Ruta } from 'src/app/models/DesignPatterns/Prototype/Ruta';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { PrototypeFactory } from 'src/app/models/DesignPatterns/Prototype/PrototypeFactory';
import { RutasFactory } from 'src/app/models/DesignPatterns/FlyWeight/RutasFactory';

@Component({
  selector: 'app-vuelo-card',
  templateUrl: './vuelo-card.component.html',
  styleUrls: ['./vuelo-card.component.css']
})
export class VueloCardComponent implements OnInit {
  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  vuelo: Vuelo;
  vuelos: Vuelo[];
  rutas: Ruta[];
  constructor(private router: Router, private reservaService: ReservaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id){
          this.buscar(params.id);
        }
      }
    );
  }
  buscar(nombre: string){
    this.getvuelos();
    this.vuelos.forEach(element => {
      // tslint:disable-next-line: triple-equals
      if (element.nombre == nombre) {
      this.vuelo = element;
      }
    });
  }
  // PATRON PROTOTYPE
  getvuelos(){
    this.vuelos = [];
    this.rutas = [];
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
    for (let l = 0; l < vuelos.Vuelos.length; l++){
      const vuelo =  new Vuelo(vuelos.Vuelos[l].Nombre, vuelos.Vuelos[l].Ubicacion);
      for (let l = 0; l < rutas.Rutas.length; l++){
        const ruta = new Ruta(rutas.Rutas[l].Nombre, rutas.Rutas[l].fecha);
        this.rutas.push(ruta);
        vuelo.addRuta(ruta);
      }
      this.vuelos.push(vuelo);
    }
   }
   // tslint:disable-next-line: typedef
   getRandomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}
}

