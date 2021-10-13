import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HabitacionModule } from './habitacion/habitacion.module';
import { ClienteModule } from './cliente/cliente.module';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { PortadaModule } from './portada/portada.module';
import { RestauranteModule } from './restaurante/restaurante.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HabitacionModule,
    ClienteModule,
    HabitacionesModule,
    PortadaModule,
    RestauranteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
