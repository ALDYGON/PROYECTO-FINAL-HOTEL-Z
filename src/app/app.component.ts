import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bass';
}


// PRODUCTOS
interface Producto{
  nombre: string,
  precio: number,
}

// FUNCION PARA CREAR UN PRODUCTO
function crear(nombre:string,precio:number):Producto {
  var producto:Producto = {
    nombre: nombre,
    precio: precio,
  }
  return producto
}

// CREANDO PRODUCTOS
var producto1 =  crear('Picaras',.5)
var producto2 =  crear('Oreo',.7)
var producto3 =  crear('Glacitas',.8)
var producto4 =  crear('Chetos',1)

var productos: Producto[];
productos = [producto1,producto2,producto3,producto4]
console.log('======== ======== ==========')
console.log('======== PRODUCTOS ==========')
console.log('======== ======== ==========')
console.table(productos)

// ALMACEN
interface Almacen{
  producto: Producto,
  cantidad: number,
}

// CREAMOS LOS ALMACENES
var almacen1: Almacen[]
almacen1 = []
var almacen2: Almacen[]
almacen2 = []

// FUNCION PARA PREPARAR E INSERTAR PRODUCTOS
function insertar(producto:Producto,cantidad:number,almacen:Almacen[]):Almacen {
  var almacens:Almacen = {
    producto: producto,
    cantidad: cantidad,
  }
  almacen.push(almacens)
  return almacens
}




// AUMENTAR CANTIDAD DEL MISMO PRODUCTO
function aumentar(almacen:Almacen[],producto:Almacen,cantidad:number):void {
  var index = almacen.indexOf(producto)
  almacen[index].cantidad += cantidad
}

// DISMINUIR CANTIDAD DEL MISMO PRODUCTO
function disminuir(almacen:Almacen[],producto:Almacen,cantidad:number):void {
  var index = almacen.indexOf(producto)
  if (almacen[index].cantidad >= cantidad) {

    almacen[index].cantidad -= cantidad
      
  }else{
    console.log("LA CANTIDAD QUE QUIERES ELIMINAR SOBRE PASA EL VALOR ACTUAL")
  }
  
}

// MOVER PRODUCTOS ENTRE ALMACENES
function mover(almacenA:Almacen[],almacenB:Almacen[],productoA:Almacen,productoB:Almacen,cantidad:number) {

  var indexA = almacenA.indexOf(productoA)
  if (almacenA[indexA].cantidad >= cantidad) {
  
    var indexB = almacenB.indexOf(productoB)
    almacenB[indexB].cantidad += cantidad
    almacenA[indexA].cantidad -= cantidad
      
  }else{
    console.log("LA CANTIDAD QUE QUIERES MOVER SOBRE PASA EL VALOR ACTUAL")
  }

}
// PRODUCTO PREPARADO E INSERTADO
var proc1macen1 = insertar(producto1,30,almacen1)
var proc2macen1 = insertar(producto2,60,almacen1)
var proc1macen2 = insertar(producto1,20,almacen2)
var proc2macen2 = insertar(producto2,0,almacen2)

// AUMENTAR O DISMINUIR UN PRODUCTO EN UN DETERMINADO ALMACEN
// aumentar(almacen1,proc1macen1,20)
// aumentar(almacen2,proc1macen2,20)
// disminuir(almacen1,proc1macen1,30)

// MOVIENDO
// mover(almacen1,almacen2,proc1macen1,proc1macen2,20)
// mover(almacen2,almacen1,proc2macen1,proc2macen2,30)

console.log('======== ======== ==========')
console.log('======== ALMACEN 1 ==========')
console.log('======== ======== ==========')
console.table(almacen1)
console.log('======== ======== ==========')
console.log('======== ALMACEN 2 ==========')
console.log('======== ======== ==========')
console.table(almacen2)