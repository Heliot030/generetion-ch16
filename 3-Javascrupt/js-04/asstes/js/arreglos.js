//coleccion de elementos

/* let arr=[1,2,3,4];
console.log(arr);
console.log();
 */

const arreglo=["adios"];
//push()

arreglo.push("generetion");
console.log(arreglo);

arreglo.unshift("A","d",3);
console.log(arreglo);


//popo elemimna un elemento final del arreglo
let datos1 = arreglo.pop();
console.log(datos1);
console.log(arreglo);

//shift quita un elemento al inicio

arreglo.splice(1,1,"Helioefrain");
//splice(posicion de inicio, cantidad 
//  cantidad de elemento a afectar, elementos 
// que insertamos)
console.log(arreglo);

//splice() corta partes de un arreglo 
let dato3  = arreglo.splice(0,2);
//posicion apartir de la cual va a cortar
//(rango de corte = (num,num))
console.log(dato3);
console.log(arreglo);