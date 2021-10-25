import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AppRoutingModule } from '../app-rounting.module';



@NgModule({
  declarations: [
    CabeceraComponent
  ],
  exports:[
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HeaderModule { }
