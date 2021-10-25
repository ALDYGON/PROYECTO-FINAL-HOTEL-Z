import { Room } from './rooms.interface';
import { HabitacionesService } from './habitaciones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms:Room[];
  matrimoniales:Room[];
  triples:Room[];
  dobles:Room[];
  simples:Room[];

  constructor(private habitacionesService:HabitacionesService) {
    this.rooms = [];
    this.matrimoniales = [];
    this.triples = [];
    this.dobles = [];
    this.simples = [];
  }

  ngOnInit(): void {
    this.rooms = this.habitacionesService.getRooms();
    this.segregar(this.rooms)
  }

  segregar(rooms:Room[]){
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].tipo==='Matrimonial') {
        this.matrimoniales.push(rooms[i]);
      }
      else if (rooms[i].tipo==='Triple') {
        this.triples.push(rooms[i]);
      }
      else if (rooms[i].tipo==='Doble') {
        this.dobles.push(rooms[i]);
      }
      else if (rooms[i].tipo==='Simple') {
        this.simples.push(rooms[i]);
      }
    }
  }

  selectorRoom(id:number){
    this.habitacionesService.selectRoom(id);
  }

}



