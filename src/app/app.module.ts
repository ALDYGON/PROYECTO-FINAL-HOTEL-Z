import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HabitacionModule } from './habitacion/habitacion.module';
import { ClienteModule } from './cliente/cliente.module';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { PortadaModule } from './portada/portada.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { AppRoutingModule } from './app-rounting.module';
import { HeaderModule } from './header/header.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HabitacionModule,
    ClienteModule,
    HabitacionesModule,
    PortadaModule,
    RestauranteModule,
    HeaderModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
