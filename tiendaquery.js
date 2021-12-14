class Producto {
    constructor(nombre, precio, imagen, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id;
    }
}

class Compra {
    constructor(user, productos) {
        this.user = user;
        this.productos = productos;
    }
}

let id = 0;
let arrayProductos = [];
let miCompra = [];
let compraUsuario = [];
const URLJSONGET = "productos.json";


//Genero los productos con Ajax y el JSON de productos.
$.get(URLJSONGET, function(respuesta, estado) {
    if(estado === "success") {
        let misProductos = respuesta;
        for (const item of misProductos) {
            arrayProductos.push(new Producto(item.nombre, item.precio, item.imagen, item.id));
        }
    }
});

console.log(arrayProductos);

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

            miCompra.push(producto);
            
        });

    }

    console.log(miCompra);

    //Boton que borra mi carrito actual, resetea el array.
    $("#btnBorrar").click(function() {
        $(".list-group-item").slideUp("fast", function() {
            $(this).remove();
        });
        miCompra.length = 0;
    });

    // Este botón guarda los prod del carrito en un JSON, para generar un historial de compras.
    $("#btnGuardar").click(function(){
        let nombreComprador = prompt("Ingrese su nombre");
        compraUsuario.push(new Compra(nombreComprador, miCompra));
        let miCompraJSON = JSON.stringify(compraUsuario);
        localStorage.setItem("comprasGeneradas", miCompraJSON);

        alert("Su compra ha sido guardada");
        $(".list-group-item").slideUp("fast", function() {
            $(this).remove();
        });
        miCompra.length = 0;
    });
})