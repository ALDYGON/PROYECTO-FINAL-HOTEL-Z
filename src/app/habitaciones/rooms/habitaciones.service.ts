import { Injectable } from '@angular/core';
import { Room, Reserva, Plato } from './rooms.interface';

@Injectable()
export class HabitacionesService {
  
  private rooms:Room[];
  private reservas:Reserva[];
  private platos:Plato[];

  private sRoom!:Room;

  constructor() { 
    this.rooms = [
      {
      id: 0,
      nombre: 'M-102',
      tipo:'Matrimonial',
      precio:200,
      descripcion:'Esta es la habitacion por defaul creado desde el servicio de habitaciones, es la primera matrimonial que se haya visto en el mundo',
      img:['../../assets/images/habitacion.jpg','../../assets/images/habitacion.jpg','../../assets/images/habitacion.jpg','../../assets/images/habitacion.jpg'],
      },
      {
        id: 1,
        nombre: 'T-202',
        tipo:'Triple',
        precio:150,
        descripcion:'Esta es la habitacion triple creada por default desde el servicio de habitaciones',
        img:['../../assets/images/habitacion.jpg','../../assets/images/habitacion.jpg','../../assets/images/habitacion.jpg','../../assets/images/habitacion.jpg'],
        },
    ];

    this.reservas = [];

    this.platos = [
      {
        id:0,
        nombre:'Arroz con huevo',
        precio:10,
        img:'../../assets/images/almuerzo1.jpg',
        tipo:'Desayuno',
      },
      {
        id:1,
        nombre:'Arroz chaufa',
        precio:10,
        img:'../../assets/images/almuerzo1.jpg',
        tipo:'Almuerzo',
      },
    ];
  }

  // RETORNAR ROOMS
  getRooms() {
    return this.rooms;
  }

  // RETORNAR RESERVAS
  getReservas(){
    return this.reservas;
  }

  // RETORNAR PLPATOS
  getPlatos(){
    return this.platos;
  }

  // AGREGAR UN ROOM
  agregarRoom(room: Room) {
    this.rooms.push(room);
  }

  // AGREGAR UNA RESERVA
  agregarReserva(reserva:Reserva){
    this.reservas.push(reserva);
  }

  // AGREGAR UN PLATO
  agregarPlato(plato: Plato) {
    this.platos.push(plato);
  }

  // REINICIALIZAR ROOM
  nuevoRoom(): Room {
    return {
      id: this.rooms.length,
      nombre: '',
      tipo:'',
      precio:0,
      descripcion:'',
      img:['../../assets/images/habitacion.jpg','../../assets/images/habitacion.jpg','../../assets/images/habitacion.jpg','../../assets/images/habitacion.jpg'],
    };
  }

  // REINICIALIZAR RESERVA
  nuevoReserva(tipo:string,nombre:string,precio:number):Reserva{
    return{
      id:this.reservas.length,
      habitacion:{id:0,descripcion:'',img:[''],nombre:nombre,tipo:tipo,precio:precio},
      ingreso:new Date(""),
      salida:new Date(""),
      precio:0,
      estado:0,
    };
  }

  // REINICIALIZAR PLATO
  nuevoPlato():Plato{
    return{
      id:this.platos.length,
      nombre:'',
      precio:0,
      img:'../../assets/images/almuerzo1.jpg',
      tipo:'',
    };
  }

  // SELECCIONAR UNA HABITACION
  selectRoom(id:number){
    for (let i = 0; i < this.rooms.length; i++) {
      
      if (this.rooms[i].id === id) {
        this.sRoom = this.rooms[i];
        break
      }
      
    }
    return this.sRoom;
  }

  // ELIMINAR UNA HABITACION
  eliminarRoom(id:number){
    for (let i = 0; i < this.rooms.length; i++) {
      
      if (this.rooms[i].id === id) {
        this.rooms.splice(i,1)
        break
      }
      
    }
    return this.rooms
  }

  // ELIMINAR UN PLATO
  eliminarPlato(id:number){
    for (let i = 0; i < this.platos.length; i++) {
      
      if (this.platos[i].id === id) {
        this.platos.splice(i,1)
        break
      }
      
    }
    return this.platos
  }

  getTheRoom(){
    return this.sRoom;
  }

}
