import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})

export class HabitacionesComponent implements OnInit {

  habitacionesMatrimoniales:any [] = 
  [
    {
      "nombre": "101",
      "img": "../../assets/images/matrimonial1.jpg"
    },
    {
      "nombre": "102",
      "img": "../../assets/images/habitacion.jpg"
    },
    {
      "nombre": "302",
      "img": "../../assets/images/matrimonial1.jpg"
    },
    {
      "nombre": "802",
      "img": "../../assets/images/habitacion.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}