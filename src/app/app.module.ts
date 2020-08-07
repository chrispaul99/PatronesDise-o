import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservaMainComponent } from './pages/home/reserva-main/reserva-main.component';
import { ReservaFormComponent } from './pages/home/reserva-main/reserva-form/reserva-form.component';
import { ReservaListComponent } from './pages/home/reserva-main/reserva-list/reserva-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnQrcodeModule } from 'an-qrcode';
import { VueloListComponent } from './pages/home/reserva-main/vuelo-list/vuelo-list.component';
import { VueloCardComponent } from './pages/home/reserva-main/vuelo-card/vuelo-card.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    ReservaMainComponent,
    ReservaFormComponent,
    ReservaListComponent,
    VueloListComponent,
    VueloCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AnQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
