class Producto {
    constructor(nombre, precio, imagen, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id;
    }
}

let id = 0;
let arrayProductos = [];
let arrayNombres = ['Box Desayuno', 'Box Minitortas', 'Box Surtidos', 'Box Vinos'];
let arrayPrecios = [1500, 1600, 1000, 2000];
let arrayImagenes = ['/Multimedia/boxDesayuno.PNG', '/Multimedia/boxMiniTortas.PNG', '/Multimedia/boxSurtidos.PNG', '/Multimedia/boxVinos.PNG'];
let arrayCarrito = [];

const URLJSONGET = "productos.json";
let copiaProductos = []; //Por fines educativos, para generar el array de productos desde el JSON.
const sessionStorageKey = 'CARRITO';

function generarProductos() {
    for(let i=0; i < arrayNombres.length; i++){
        nombre = arrayNombres[i];
        precio = arrayPrecios[i];
        imagen = arrayImagenes[i];
        id += 1;

        arrayProductos.push(new Producto(nombre, precio, imagen, id));
    }
}

generarProductos();
console.log(arrayProductos);


//Otra forma de generar los productos con Ajax y el JSON de productos.
$.get(URLJSONGET, function(respuesta, estado) {
    if(estado === "success") {
        let misProductos = respuesta;
        for (const item of misProductos) {
            copiaProductos.push(new Producto(item.nombre, item.precio, item.imagen, item.id));
        }
    }
});

console.log(copiaProductos);

//Ahora arranco a armar todo con jQuery
//Armo las cards con los datos del arrayProductos

$(document).ready(()=>{

    for(let j=0; j<arrayProductos.length; j++){

        $("#cardContainer").append(
            `<div class="card">
                <img src=${arrayProductos[j].imagen} class="card-img-top" alt=${arrayProductos[j].nombre}>
                <div class="class-body">
                    <h5 class="card-title mt-1">${arrayProductos[j].nombre}</h5>
                    <p class="card-text">$${arrayProductos[j].precio}</p>
                    <a class="btn mb-1" id=${arrayProductos[j].id}>Agregar al carrito</a>
                </div>
            </div>`
        );
    }

    //Aca voy a generar las acciones de clickear el botón
    for (let producto of arrayProductos) {
        
        $(`#${producto.id}`).click(function(){

            $("#listaProductos").append(
                `<li class="list-group-item dNone">${producto.nombre}</li>`
            );

            arrayCarrito.push(producto);

        });

    }

    console.log(arrayCarrito);

    $("#btnBorrar").click(function() {
        $(".list-group-item").slideUp("fast", function() {
            $(this).remove();
        });
    });

    //Esta función va a guardar los prod del carrito en el localStorage, pero tengo que generar un array para pushear los valores
    const carritoJSON = JSON.stringify(arrayCarrito);
    console.log(carritoJSON);
    $("#btnGuardar").click(function(){
        sessionStorage.setItem(sessionStorageKey, carritoJSON);
    });

})