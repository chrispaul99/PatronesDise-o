import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ReservaMainComponent } from './pages/home/reserva-main/reserva-main.component';
import { ReservaListComponent } from './pages/home/reserva-main/reserva-list/reserva-list.component';
import { ReservaFormComponent } from './pages/home/reserva-main/reserva-form/reserva-form.component';
import { VueloListComponent } from './pages/home/reserva-main/vuelo-list/vuelo-list.component';
import { VueloCardComponent } from './pages/home/reserva-main/vuelo-card/vuelo-card.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent, canActivate: [ AuthGuard ], children:[
    { path: '', component: ReservaMainComponent , canActivate:[AuthGuard], children:[
      { path: 'reserva', component: ReservaListComponent },
      { path: 'vuelo', component: VueloListComponent },
      { path: 'vuelo/:id', component: VueloCardComponent },
      { path: 'create', component: ReservaFormComponent },
      { path: '', redirectTo: 'reserva', pathMatch: 'full'},
    ]},
  ]},
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
