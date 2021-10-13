import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaratulaComponent } from './caratula/caratula.component';



@NgModule({
  declarations: [
    CaratulaComponent
  ],
  exports:[
    CaratulaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortadaModule { }
