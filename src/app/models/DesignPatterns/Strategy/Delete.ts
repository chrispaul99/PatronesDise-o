import { ITransaction } from './ITransaction';
import { ReservaService } from '../../../services/reserva.service';
import Swal from 'sweetalert2';
export class Delete implements ITransaction {

    constructor(private reservaService: ReservaService) { }

    doTransaction(argument: any): void {
        this.reservaService.delete(argument).subscribe(() => {
            Swal.fire(
                'Eliminado!',
                'La reserva fue eliminada.',
                'success'
            ).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                }
            });
        });
    }
}
