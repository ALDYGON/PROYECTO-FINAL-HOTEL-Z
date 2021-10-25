import { Room,Reserva } from 'src/app/habitaciones/rooms/rooms.interface';
import { HabitacionesService } from 'src/app/habitaciones/rooms/habitaciones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  reservas!:Reserva[];

  constructor(private habitacionesService:HabitacionesService) { }

  ngOnInit(): void {

    this.reservas = this.habitacionesService.getReservas()

  }

}
