import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-rounting.module';



@NgModule({
  declarations: [
    RoomComponent
  ],
  exports:[
    RoomComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class HabitacionModule { }
