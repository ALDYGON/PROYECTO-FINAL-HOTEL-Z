import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    RoomComponent
  ],
  exports:[
    RoomComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class HabitacionModule { }
