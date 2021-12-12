let seccionDOM = document.getElementById("seccionDOM");

//ahora quiero agregar el mismo párrafo que está debajo del h1, pero con DOM en vez del html. class="parrafoHistoria"

let parrafo = document.createElement('p');
parrafo.innerHTML = `Mi nombre es <strong>Axel</strong>, chef, pastelero e hincha de river. <strong>Cocinar</strong> es lo que más me gusta y es por eso que me dedico a esto.
                    Empecé en la casa de mis padres, con una cocina muy chica. Ahí miraba mucho cómo cocinaba mi vieja, y la ayudaba cuando podía.
                    Despues me profesionalicé estudiando en el EAG y me recibí de Cocinero Profesional, y ahí fue cuando mis viejos me regalaron 
                    un freezer aparte para poder comenzar con este emprendimiento.`

function agregarParrafoConClase() {
    parrafo.classList.add("parrafoHistoria");
    seccionDOM.appendChild(parrafo);
}

agregarParrafoConClase();