import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderModule } from '../header/header.module';
import { AppRoutingModule } from '../app-rounting.module';
import { HabitacionesService } from './rooms/habitaciones.service';
import { FormsModule } from '@angular/forms';
import { CRoomComponent } from './c-room/c-room.component';

@NgModule({
  providers:[
    HabitacionesService
  ],
  declarations: [
    RoomsComponent,
    CRoomComponent
  ],
  exports:[
    RoomsComponent,
    CRoomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    AppRoutingModule,
  ]
})
export class HabitacionesModule { }


