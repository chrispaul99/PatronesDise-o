import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { PreferenciaSingleton } from '../../models/DesignPatterns/Singleton/PreferenciaSingleton';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color:string;
  preferenciaSingleton: PreferenciaSingleton;
  constructor(
      private auth: AuthService,
      private reservaService: ReservaService,
      private router: Router
    ) { }

  ngOnInit() {
    this.preferenciaSingleton = PreferenciaSingleton.getInstance();
    this.color = this.preferenciaSingleton.getColorSecondary();
  }

  salir() {

    this.auth.logout();
    this.router.navigateByUrl('/login');
    this.reservaService.setBan(false);
  }

  modoOscuro(): void {
    if (this.color === 'primary'){
      this.preferenciaSingleton.setColorSecondary('secundary');
    }
    else{
      this.preferenciaSingleton.setColorSecondary('primary');
    }
    this.color = this.preferenciaSingleton.getColorSecondary();
  }

}
