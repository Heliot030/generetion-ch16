/* tipos de datos */
//cadena de textto 
let cadena = 'hola Amiguos Amiguos';
//number es numero
/* 
Plantillas literales 
templates string
literal string
*/
/* interpolacion  ${ se puede poner numeros y los toma como sumas}*/
console.log(`Esta es una cadena ${5+5} `);

let a = 12;
console.log(a);

 // let presentacion
 let nombre = `Raul`
console.log("Mi nombre es " + nombre);
//es mas poderoso se interoreta como texto enter comillas
console.log(`yo me llamo ${nombre}`);//codigo dentro de string

//Array mas actual 
let arr = [1,"a",null,12];
console.log(arr);
//forma mas antigua muestra por separado los elementos
let arr2  = new Array("B",2);
console.log(arr2);

/* objetos 
collecion de elementos */
const obj= {nombre: 'Raul',
            edad :31, 
            hobbies:[
                "leeer",
                "ver srek 1 y 2",
                "comer",
            ],
            auto:{
                marca: "VW",
                modelo:"Pointer",
                year: 2000
            },
            saludar : function(){
                return "hola"
            }
        };

        console.log(`Mi hoobi es  ${obj.hobbies[1]}`);
        console.log(`La marca de mi carro es es ${obj.auto.year}`);
        console.log(obj.saludar());
        console.log(`La aciion que realizo es saludar ${obj.saludar()}`);


