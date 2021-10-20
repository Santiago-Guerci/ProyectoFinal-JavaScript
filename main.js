//Simulador carrito de compras de AxelCocina

// 1)Armar caja: array con objetos "producto" {producto, cantidad y precio}
//   Y luego un array de arrays (es decir, un pedido con varias cajas).
//   Cada caja aceptará un máximo de 3 productos.

//=============== Variables y Funciones ===================
let productoElegido = 0;
let precio = 0;
let cantidadProducto = 0;
let valorFinal = 0;
const arrayCaja1 = [];
const arrayCaja2 = [];

class Producto {

    constructor(producto, precio, cantidad, id) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.subTotal = this.precio * this.cantidad;
        this.id = id;
    }
}

function agregarProducto() {

    //!productoElegido quiere decir que mientras no sea un número (ya que es el input esperado).

    while(!productoElegido || productoElegido == 0 || productoElegido > 8) {
        productoElegido = parseInt(prompt("Ingrese un producto a incluir en la caja\n 1: Pan de Masa Madre($300)\n 2: Chipa($100)\n 3: Cookies($80)\n 4: Macarons($120)\n 5: Minitorta Brownie($450)\n 6: Minitorta Cheesecake($400)\n 7: Minitorta Lemon Pie($450)"));
    }
    
    switch(productoElegido){
        case 1:
            productoElegido = "Pan de Masa Madre";
            precio = 300;
            id = 1;
            break;
        case 2:
            productoElegido = "Chipa";
            precio = 100;
            id = 2;
            break;
        case 3:
            productoElegido = "Cookies";
            precio = 80;
            id = 3;
            break;
        case 4:
            productoElegido = "Macarons";
            precio = 120;
            id = 4;
            break;
        case 5:
            productoElegido = "Minitorta Brownie";
            precio = 450;
            id = 5;
            break;
        case 6:
            productoElegido = "Minitorta Cheesecake";
            precio = 400;
            id = 6;
            break;
        case 7:
            productoElegido = "Minitorta Lemon Pie";
            precio = 450;
            id = 7;
            break;
    }

    while(!cantidadProducto || cantidadProducto == 0 || cantidadProducto > 3) {
        cantidadProducto = parseInt(prompt("Ingrese la cantidad de ejemplares de "+productoElegido+" que desea agregar en la caja (Máx. 3)"));
    }

    return (new Producto(productoElegido, precio, cantidadProducto, id));
}






//=============== Correr el programa ===================

alert("Bienvenido a AxelCocina - Panadería y Pastelería\nAquí podrá armar dos cajas de tres productos, y luego proceder a comprarlas.");

//Necesito pedir 3 veces por caja. Pido 3 veces, corto, armo una caja y la pusheo al array de pedido, y luego vuelvo a pedir.
for(let i = 0; i < 3; i++) {
    arrayCaja1.push( agregarProducto() );
    productoElegido = 0;
    precio = 0;
    cantidadProducto = 0;
}

console.log(arrayCaja1);
alert("Su primer caja está completa. Ahora complete la segunda caja");

for(let i = 0; i < 3; i++) {
    arrayCaja2.push( agregarProducto() );
    productoElegido = 0;
    precio = 0;
    cantidadProducto = 0;
}

console.log(arrayCaja2);
alert("Su segunda caja está completa.");

//Creo un array concatenando ambas cajas armadas, para tener el pedido.
const arrayPedido = arrayCaja1.concat(arrayCaja2);
console.log(arrayPedido);

//La forma que encontré de tomar los valores fue mapeando la propiedad .subTotal de los objetos dentro del array.
let arraySubtotales = arrayPedido.map(a => a.subTotal);
console.log(arraySubtotales);

//Luego los ordené de menor a mayor. Esto es únicamente para el desafío complementario.
arraySubtotales.sort((a, b) => a - b);
console.log(arraySubtotales);

for (let i = 0; i < arraySubtotales.length; i++) {
    valorFinal += arraySubtotales[i];
}

alert("El monto final a pagar es: $"+ valorFinal+". Proceda a elegir el método de pago.\nFin del simulador.");