
//crear un elemento
const imagen = document.createElement("img");
console.log(imagen);

//modificar los atributos del elemento
imagen.src='https://placeimg.com/200/200/animals';
imagen.alt='Imagenes aleatorios de animales'

//lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin",imagen);

// forma correcta de crear o insertar un elemento
// se crea el elememnto que contendra la imagen
//selcionar el elemento padre

const padreImg = document.getElementById('padreImg');
//crear elemento
const imagen2 = document.createElement('img');
//modificacmos atributos del elemento
imagen2.src = "https://placeimg.com/200/200/animals";
imagen2.alt = "imagenes de natulareza";
//insertar elemento

padreImg.appendChild(imagen2);



const frutas =["Toronja","Manzanas", "Mandarina"];
console.log(frutas);
const listaFrutas =document.getElementById('frutas');
 //iterar la informacion dentro de un arrgelo

//console.log(listaFrutas); 

 frutas.forEach((el) => {
    listaFrutas.innerHTML += `<li> ${el}</li>`
}); 