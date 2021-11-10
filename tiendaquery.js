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
                `<li class="list-group-item">${producto.nombre}</li>`
            );

        });

    }

})