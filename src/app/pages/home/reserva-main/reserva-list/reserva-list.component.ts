import { Component, OnInit } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Reserva } from '../../../../models/DesignPatterns/Singleton/Reserva';
import { ReservaService } from '../../../../services/reserva.service';
import { Router } from '@angular/router';
import { Vuelo } from 'src/app/models/DesignPatterns/Prototype/Vuelo';
import { Ruta } from 'src/app/models/DesignPatterns/Prototype/Ruta';
import { PrototypeFactory } from 'src/app/models/DesignPatterns/Prototype/PrototypeFactory';
import { RutasFactory } from 'src/app/models/DesignPatterns/FlyWeight/RutasFactory';
import Swal from 'sweetalert2';
import { Item } from '../../../../models/DesignPatterns/State/Item';
import { ItemAdded } from 'src/app/models/DesignPatterns/State/ItemAdded';
import { TransactionMethod } from 'src/app/models/DesignPatterns/Strategy/TransactionMethod';
import { Delete } from '../../../../models/DesignPatterns/Strategy/Delete';
@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {
  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  reservas: Reserva[];
  vuelos: Vuelo[];
  rutas: Ruta[];
  mensaje: string;
  objItem: Item = new Item();
  context: TransactionMethod;
  constructor(private router: Router, private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.list();

    // USO DEL PATRON STATE
    if (this.reservaService.getBan()) {
      this.objItem.setState(new ItemAdded());
    }
    this.mensaje = this.objItem.show();
    console.log(this.mensaje);
  }
  list(): void {
    this.reservaService.list().subscribe(result => {
      this.reservas = result;
    });
  }

  eliminar(id: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'La reserva se eliminará.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.isConfirmed) {
      // USO DEL PATRON STRATEGY
        this.context = new TransactionMethod(new Delete(this.reservaService));
        this.context.triggerTransaction(id);
      }
    });
  }
}
