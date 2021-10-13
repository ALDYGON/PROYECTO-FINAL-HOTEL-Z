import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

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
