
// funciones


/* function sumar(numero1,numero2){
    console.log('voy a sumar');
    //podemos tener mas cosas por qui tnatas como 
    //la intuccion que yo quiera 
    console.log('él resultado de sumar es : ' + (numero1 + numero2));
}
sumar(4, 5); */

/* function calcularSueldo(sueldoDiario){

let nombre = prompt("Escribe tu nombre");



const sueldo= sueldoDiario; //es const
//let sueldoSemanal = (sueldoDiario) * 7;
//let sueldoMes = (sueldoDiario) * 30;

console.log('empleado:' , nombre);
console.log("Sueldo semanal:" + sueldoDiario);
//console.log("Sueldo Mes:" + sueldoMes);

    return sueldoDiario;
}
 */
/* prompt();

calcularSueldo(100);
calcularSueldo(24); */

// calcauladora de de porcentajes
//o.6 = 60%

function calculadoraPorcentaje(numero , porcentaje){

    let resultado = numero * porcentaje 
    //console.log(resultado);

    return resultado;
}

let resultado = calculadoraPorcentaje( 100 , 0.80);
console.log(resultado);
let resultado1 = calculadoraPorcentaje(100,0.40);
console.log(resultado1);
