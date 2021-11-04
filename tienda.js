let nombre;
let precio;
let id = 0;

let arrayProductos = [];
let arrayNombres = ['Box Desayuno', 'Box Minitortas', 'Box Surtidos', 'Box Vinos'];
let arrayPrecios = [1500, 1600, 1000, 2000];
let arrayImagenes = ['/Multimedia/boxDesayuno.PNG', '/Multimedia/boxMiniTortas.PNG', '/Multimedia/boxSurtidos.PNG', '/Multimedia/boxVinos.PNG'];

//Esta parte genera los objetos Producto según los productos que tengo.
class Producto {
    constructor(nombre, precio, imagen, id) {
        this.producto = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id;
    }
}

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

//Esta parte va a generar las cards con los datos del arrayProductos.
let cardContainer = document.getElementById('cardContainer');

function generarCard(indice) {

    let card = document.createElement('div');
    card.classList.add('card');
    cardContainer.appendChild(card);

    let imagen = document.createElement('img');
    imagen.classList.add('card-img-top');
    imagen.setAttribute('src', arrayImagenes[indice]);
    imagen.setAttribute('alt', arrayNombres[indice]);
    card.appendChild(imagen);

    generarContenido(card, indice)
    
}

function generarContenido(card, indice){
    let cardBody = document.createElement('div');
    cardBody.classList.add('class-body');
    card.appendChild(cardBody);

    //Creo los hijos del cardBody
    let h5 = document.createElement('h5');
    h5.classList.add('card-title', 'mt-1');
    h5.textContent = arrayNombres[indice];

    let p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = '$' + arrayPrecios[indice];

    let a = document.createElement('a');
    a.classList.add('btn', 'mb-1');
    a.setAttribute('id', (indice+1));
    a.textContent = 'Agregar al carrito';

    //Le meto los hijos en DOM
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(a);

}

//Renderizo los productos
for(let j = 0; j < arrayProductos.length; j++){
    generarCard(j);
}


//Esta parte permite hacer click en las cards y agregar al carrito.
let botones = document.getElementsByClassName('btn');
let nombreProd = document.getElementsByTagName('h5');
let listaProductos = document.getElementById('listaProductos');


for(let boton of botones){

    boton.addEventListener('click', () => {

        let elementoLista = document.createElement('li');
        console.log(boton.id);

        if(boton.id == 1){
            elementoLista.innerHTML = nombreProd[0].textContent;

        }else if(boton.id == 2){
            elementoLista.innerHTML = nombreProd[1].textContent;

        }else if(boton.id == 3){
            elementoLista.innerHTML = nombreProd[2].textContent;

        }else if(boton.id == 4){
            elementoLista.innerHTML = nombreProd[3].textContent;
        }

        elementoLista.classList.add("list-group-item");
        listaProductos.appendChild(elementoLista);
        
    });
}