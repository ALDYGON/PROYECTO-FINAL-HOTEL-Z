import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaratulaComponent } from './caratula/caratula.component';
import { AppRoutingModule } from '../app-rounting.module';



@NgModule({
  declarations: [
    CaratulaComponent
  ],
  exports:[
    CaratulaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PortadaModule { }
