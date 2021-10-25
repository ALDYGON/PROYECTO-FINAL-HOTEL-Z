import { Room } from '../rooms/rooms.interface';
import { HabitacionesService } from '../rooms/habitaciones.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c-room',
  templateUrl: './c-room.component.html',
  styleUrls: ['./c-room.component.css']
})
export class CRoomComponent implements OnInit {

  room!: Room;
  rooms!:Room[];

  constructor(private habitacionesService:HabitacionesService) { }


  ngOnInit(): void {
    this.room = this.habitacionesService.nuevoRoom();
    this.rooms = this.habitacionesService.getRooms();
  }

  nuevoRoom():void{
    this.habitacionesService.agregarRoom(this.room);
    this.room = this.habitacionesService.nuevoRoom();
    Swal.fire('Habitacion creada con exito');  
  }

  eliminarRoom(id:number){
    this.habitacionesService.eliminarRoom(id);
    Swal.fire('Habitacion eliminada con exito');
  }

}
