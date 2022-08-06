

//console.log(sumar(2,3));
//short() 
//metodo de arreglos es ordenar los 
//los elemenetos los ordena numero unicode
//Las mayuscula van antes 
const arr =["X","A","H","a","W","b"];

//console.log(arr);
arr.sort();
//console.log(arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
//console.log(arr2);;

arr2.sort();
//console.log(arr2);

/* const arr3=[5,12,1,80];

arr3.sort((a,b)) => (b-a);
console.log(arr3); */

// funcion decralada

function sumar(a,b){
    return a+b;
}

//funcion expresada no es anonima

let efra = function (a,b) {
return (a*b);    
}

//onsole.log(efra(3,4));

//funciones flechas = es una funcion expresada
//mas sencillade hacer

/* const dividir = (a,b) =>{
return(a/b);
};
 */
// sies un valor podemos simplificar
const dividir = (a,b) => (a/b);
console.log(dividir(12,2));

const arrNumeros =[1,2,3,4,5,6];
/* for(let i=0;i<arrNumeros;i++){
    arrNumeros[i] = arrNumeros[i] *2;
    
}
 */


arrNumeros.forEach((eleemento)=>
console.log(eleemento *=2) );