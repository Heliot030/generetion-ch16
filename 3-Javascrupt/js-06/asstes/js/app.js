

//getElementByid()


console.log(document.getElementById('Parrafo1').textContent);

const parrafo1= document.getElementById('Parrafo1');
console.log(parrafo1.textContent);

parrafo1.textContent = "Hila desde parrafo 2";

console.log(parrafo1.style);

parrafo1.style.color= 'blue'

//querySelector()

const parrafo2 = document.querySelector('.efrain');
console.log(parrafo2.textContent);

parrafo2.textContent += "modoficando los daños colaterales";


//queryselectorALL 
//nos da una lista de nodos

const parrafos=document.querySelectorAll('p'); 
console.log(parrafos[2]);
//css font-size
//jss fontSize 
parrafos[2].style.fontSize = "2rem";

//---------- ejersicio mio -------
console.log(document.getElementById('elNuevo').textContent);
const elNuevo= document.getElementById('elNuevo');

elNuevo.style.color = 'red';

/* Reemplazar eontenido */
const parrafo5 = document.getElementById('parrafo5');

console.log(parrafo5);
console.log(parrafo5.textContent);
console.log(document.body.innerHTML);// muestra el interiol del elemento
//innerHTML muestra lo interior de html
//outer HTML muestra lo exteriol,reemplaza todo el elemento
/* 
parrafo5.innerHTML = '<a href ="http://google.com"> Enalace</a>'; */ //innerHTML reemplaza el cotenido del elmento

/* parrafo5.innerHTML = '<div class="elemento"> esto es un div </div>'
*/

console.log(parrafo5.classList.contains("elemento"));
/* toogler quita y pone */
const cambiaoColor= () =>{
    parrafo5.classList.toggle('elemento');
}
cambiaoColor(); //agrega clase
cambiaoColor();// se qiuta la clase toggle
