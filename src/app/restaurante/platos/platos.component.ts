import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  
  // DATOS PARA DESAYUNO
  restauranteDesayuno:any [] = 
  [
    {
      "nombre": "Arroz con Huevo",
      "img": "../../assets/images/plato.jpg",
      "precio": 5
    },
    {
      "nombre": "Arroz Chaufa",
      "img": "../../assets/images/desayuno1.jpg",
      "precio": 7
    },
  ];

  // DATOS PARA ALMUERZO
  restauranteAlmuerzo:any [] = 
  [
    {
      "nombre": "Lomo Saltado",
      "img": "../../assets/images/almuerzo1.jpg",
      "precio": 5
    },
    {
      "nombre": "Chicharron-Pescado",
      "img": "../../assets/images/almuerzo2.jpg",
      "precio": 7
    },
  ];

  // DATOS PARA ALMUERZO
  restauranteCena:any [] = 
  [
    {
      "nombre": "Pollo Enrrollado",
      "img": "../../assets/images/cena1.jpg",
      "precio": 5
    },
    {
      "nombre": "Bistec Montado",
      "img": "../../assets/images/cena2.jpeg",
      "precio": 7
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
