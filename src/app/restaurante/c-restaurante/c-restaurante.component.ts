import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/habitaciones/rooms/rooms.interface';
import { HabitacionesService } from 'src/app/habitaciones/rooms/habitaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c-restaurante',
  templateUrl: './c-restaurante.component.html',
  styleUrls: ['./c-restaurante.component.css']
})
export class CRestauranteComponent implements OnInit {

  plato!: Plato;
  platos:Plato[];

  constructor(private habitacionesService:HabitacionesService) { 
    this.platos = [];
  }

  ngOnInit(): void {
    this.plato = this.habitacionesService.nuevoPlato();
    this.platos = this.habitacionesService.getPlatos();
  }

  nuevoPlato():void{
    this.habitacionesService.agregarPlato(this.plato);
    this.plato = this.habitacionesService.nuevoPlato();
    Swal.fire('Habitacion creada con exito');  
  }

  eliminarPlato(id:number){
    this.habitacionesService.eliminarPlato(id);
    Swal.fire('Habitacion eliminada con exito');
  }

}
