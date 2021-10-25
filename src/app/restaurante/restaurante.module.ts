import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatosComponent } from './platos/platos.component';
import { HeaderModule } from '../header/header.module';
import { CRestauranteComponent } from './c-restaurante/c-restaurante.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlatosComponent,
    CRestauranteComponent
  ],
  exports:[
    PlatosComponent,
    CRestauranteComponent
    
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule
  ]
})
export class RestauranteModule { }
