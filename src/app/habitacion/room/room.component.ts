import { Room,Reserva } from 'src/app/habitaciones/rooms/rooms.interface';
import { HabitacionesService } from 'src/app/habitaciones/rooms/habitaciones.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  room!:Room;
  reserva!: Reserva;
  in!:any;
  out!:any;
  days!:number;

  constructor(private habitacionesService:HabitacionesService) { 
    
  }
  ngOnInit(): void {
    this.room = this.habitacionesService.getTheRoom();

    

    this.reserva = this.habitacionesService.nuevoReserva(this.room.tipo,this.room.nombre,this.room.precio);

  }

  nuevoReserva():void{
    this.in =  new Date(this.reserva.ingreso).getTime();
    this.out = new Date(this.reserva.salida).getTime();
    this.days = Math.floor((this.out-this.in)/(1000*60*60*24));
    this.habitacionesService.agregarReserva(this.reserva);
    this.reserva = this.habitacionesService.nuevoReserva('','',0);
    Swal.fire('La habitacion fue reservada con exito');  
  }

}
