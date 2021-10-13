import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatosComponent } from './platos/platos.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    PlatosComponent
  ],
  exports:[
    PlatosComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class RestauranteModule { }
