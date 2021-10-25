import { Plato } from 'src/app/habitaciones/rooms/rooms.interface';
import { HabitacionesService } from 'src/app/habitaciones/rooms/habitaciones.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  
  platos:Plato[];
  desayunos:Plato[];
  almuerzos:Plato[];
  cenas:Plato[];

  constructor(private habitacionesService:HabitacionesService) { 
    this.platos = [];
    this.desayunos = [];
    this.almuerzos = [];
    this.cenas = [];
  }

  ngOnInit(): void {

    this.platos = this.habitacionesService.getPlatos();
    this.segregar(this.platos)

  }

  segregar(platos:Plato[]){
    for (let i = 0; i < platos.length; i++) {
      if (platos[i].tipo==='Desayuno') {
        this.desayunos.push(platos[i]);
      }
      else if (platos[i].tipo==='Almuerzo') {
        this.almuerzos.push(platos[i]);
      }
      else if (platos[i].tipo==='Cena') {
        this.cenas.push(platos[i]);
      }
    }
  }

}
