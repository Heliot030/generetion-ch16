//console.log("hola mundo");

function saludar (){
  //  console.log("hola mundo perro de mierda");
}
//saludar();

//Arreglos
//dos maneras de crear [] por corchetes
let num = [1,2,3,4,5,6,7];
//console.log(num);

// esta fue la primera que surgio
let arr1 = new Array();
//console.log(arr1);

//usar un arreglo
const num00 = [];
//console.log(num00 );

//notacion de corchetes
//console.log(num00 [4]);

num00 [5] = 25;
num00 [7] = 23; 

//console.log(num00);

//propiedades de los arreglos 
//descripcion de mis arreglos

//console.log(num00.length);

//Metodos
//Acciones que puede reallizar un arreglo

const frutas = ["Manzanas","Platano"];
console.log(frutas);

//push agregar un valor al final del arreglo

//let  frutas = "Mango";
frutas.push("Zanahoria");
console.log(frutas);

// pop() quita  lemento del aarreglo
let elemenborrsdo =frutas.pop();
console.log(frutas);
console.log(elemenborrsdo);

//unshilft()
let devolver = frutas.unshift("uva","pera","Ppaya"); //nos ayuda a ver que hizo
console.log(frutas);
console.log(devolver);

//shift elimnia elemento de un arreglo

frutas.shift();


let frutaquitada = frutas.shift();
console.log(frutas);
console.log(frutaquitada);