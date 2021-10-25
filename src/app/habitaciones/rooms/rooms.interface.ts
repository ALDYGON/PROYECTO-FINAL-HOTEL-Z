export interface Room{
    id: number,
    nombre: string,
    tipo:string,
    precio:number,
    descripcion:string,
    img: string [],
}

export interface Reserva{
    id:number,
    habitacion:Room,
    ingreso:Date,
    salida:Date,
    precio:number,
    estado:number,
}

export interface Plato{
    id:number,
    nombre:string,
    precio:number,
    img:string,
    tipo:string,
}