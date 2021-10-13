import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortadaComponent } from './portada.component/portada.component';
import { HabitacionesComponent } from './habitaciones.component/habitaciones.component';
import { RestauranteComponent } from './restaurante.component/restaurante.component.';
import { HeaderComponent } from './header.component/header.component';
import { HabitacionComponent } from './habitacion.component/habitacion.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HabitacionesComponent,
    HabitacionComponent,
    RestauranteComponent,
    HeaderComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
