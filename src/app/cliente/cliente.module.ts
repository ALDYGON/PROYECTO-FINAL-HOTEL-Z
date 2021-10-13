import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasComponent } from './reservas/reservas.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    ReservasComponent
  ],
  exports:[
    ReservasComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class ClienteModule { }
