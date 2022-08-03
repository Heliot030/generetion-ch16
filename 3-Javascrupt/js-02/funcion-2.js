function miFuncion( a,b){
    return(a+b)
}

let resultado = miFuncion(3,9);
//console.log(resultado);

/*-----------------funcion 0 exprecion anonima-------------  */

let suma = function(a,b){ return(a+b) };

/* resultados formas de llamar  */

let sum = suma(12,4);
console.log("la suma es: "+ sum);

/* ------funciones anonimas y en operaciones basicas */

let resta = function(q,w){ return(q-w) };
let res = resta(12,6);
console.log("la resta de 12 menos 6 es: "+ res);

let multplicaion = function(e,r){return(e*r)};
let multiplicar= multplicaion(12,2);
console.log("esta es la mutiplicadion de 12x2 =",multiplicar); 

/* ---------------------self auotollamada un sola vez ------------------ */
(function(a,s){
console.log("El resultado autollamada" + (a+s)); })(3,4)
