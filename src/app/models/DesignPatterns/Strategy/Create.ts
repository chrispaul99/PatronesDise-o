import { ITransaction } from './ITransaction';
import { ReservaService } from 'src/app/services/reserva.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
export class Create implements ITransaction {

    constructor(private reservaService: ReservaService, private router: Router) {}

    doTransaction(argument: any): void {
        this.reservaService.reservar( argument ).subscribe( resp => {
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
        },
        () => {
            this.reservaService.setBan(true);
        });
    }
}
