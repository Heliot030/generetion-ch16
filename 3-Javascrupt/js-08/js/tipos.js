
//tipo predefinido

let tiempo = new Date();
//console.log(tiempo);

//console.log(Math);

//obj literal

let obj_literal = {
    nombre: 'Juan',
    edad: 35,

}

let obj_constructor = new Object(); //instancio
obj_constructor.nombre = 'Dora';
obj_constructor.edad = 44;
//console.log(obj_literal);
//console.log(obj_constructor);

obj_constructor['nombre'];
let llave = 'nombre';
console.log('esto es una llave' + '  ' + obj_constructor[llave]);



let cadena = 'Esto es una cadena'; //objeto primitivo
//objeto tipo cade string
let cadenaObj = new String('esto es otra cadena obj');
//console.log(cadena);

//console.log(cadenaObj);
/* tipo numerico */
let num = 13;
let numObj = new Number(13.13);

//console.log(num);
//console.log(numObj);

let lista = ['2', '3', '5', '7'];
let lista_Obj = new Array('1', '4', '6', '8', '9');

//console.log(lista);
//console.log(lista_Obj);
