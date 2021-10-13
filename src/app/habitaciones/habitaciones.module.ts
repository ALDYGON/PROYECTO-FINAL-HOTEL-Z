import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    RoomsComponent
  ],
  exports:[
    RoomsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class HabitacionesModule { }
