//Voy a utilizar esta copia de mi proyecto final para realizar el resto de los ejercicios. Ahora entrego el ejercicio de DOM
// Eliminé todo el simulador de la primer entrega del proyecto, total lo tengo en otro repositorio

let nombre = prompt("Ingrese su nombre");
let titulo = document.getElementById("titulo");
let seccionDOM = document.getElementById("seccionDOM");

titulo.textContent = `Bienvenido ${nombre}, AxelCocina lo saluda`;

//ahora quiero agregar el mismo párrafo que está debajo del h1, pero con DOM en vez del html. class="parrafoHistoria"

let parrafo = document.createElement('p');
parrafo.innerHTML = `Mi nombre es <strong>Axel</strong>, chef, pastelero e hincha de river. <strong>Cocinar</strong> es lo que más me gusta y es por eso que me dedico a esto.
                    Empecé en la casa de mis padres, con una cocina muy chica. Ahí miraba mucho cómo cocinaba mi vieja, y la ayudaba cuando podía.
                    Despues me profesionalicé estudiando en el IAG y me recibí de Cocinero Profesional, y ahí fue cuando mis viejos me regalaron 
                    un freezer aparte para poder comenzar con este emprendimiento.`

function agregarParrafoConClase() {
    parrafo.classList.add("parrafoHistoria");
    seccionDOM.appendChild(parrafo);
}

agregarParrafoConClase();