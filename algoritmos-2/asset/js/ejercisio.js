/* crea un archivo llamado ejercicio1.js
cada comando debe mostrarse en consola

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"]; */


const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(personas);

//Escribe un comando para remover a "Dani" del arreglo
personas.splice(1,1 ); // (1,1 ,"Beto");tambien cambia nombres
console.log(personas);

//Escribe un comando para remover a "Juan del arreglo"
personas.splice(2,1);
console.log(personas);


//Escribe un comando para agregar a "Luis" al inicio del arreglo
personas.unshift("luis");
console.log(personas);

//otro ejemplo del de arriba se pueden usar en conjunto los metodos
personas.unshift(personas.splice(0,1)[0]);
console.log(personas);

//Escribe el comando para agregar tu nombre al final del arreglo
personas.push("heliot");
console.log(personas);

//Escribe el comando para mostrar la posición de "Maria"
console.log(personas.indexOf("Maria"));


//Escribe el comando para mostrar la posición de tu nombre
console.log(personas.indexOf("heliot"));

//arreglo multidimnecionalidad
const nombre = [1,23 ,"hola","holaaa",true,false
, [32,33,"adios"],["ROJO","Verde"]];

console.log(nombre[6][1]);





