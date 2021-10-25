import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasComponent } from './reservas/reservas.component';
import { HeaderModule } from '../header/header.module';
import { AppRoutingModule } from '../app-rounting.module';



@NgModule({
  declarations: [
    ReservasComponent
  ],
  exports:[
    ReservasComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    AppRoutingModule
  ]
})
export class ClienteModule { }
