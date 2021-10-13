import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  // RESERVAS DEE UN CLIENTE
  reservas:any [] = 
  [
    {
      // "habitacion": [{"tipo":"Matrimonial"},{"nombre":"101"},{"precio":100}],
      // "fecha": [{"ingreso":"2021/10/09"},{"salida":"2021/10/11"}],
      // "precioHabitacion": 200,
      // "restaurante": [{"plato1":[{"nomPlato":"Arroz con Huevo","precioPlato":5}]},{"plato2":[{"nomPlato":"Arroz Chaufa","precioPlato":7}]}],
      // "estado":2,

      "tipo":"Matrimonial",
      "nombre":"101",
      "precioHabDia":100,
      "fechaIn":"2021/10/09",
      "fechaOut":"2021/10/11",
      "precioHabitacion": 200,

      "plato1":"Arroz con Huevo",
      "precioPlato1":5,

      "plato2":"Arroz Chaufa",
      "precioPlato2":7,

      "estado":2

    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
