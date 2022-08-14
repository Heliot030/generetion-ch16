/* 
let Persona = {
    nombre: 'Juan',
    apellido: 'Efren',
    edad: 35,
}
console.log(Persona);
console.log("------instancialos-----");

let PersonaConstructor = new Object(); //instancia
PersonaConstructor.nombre = "Leon"
PersonaConstructor.apellido = 23;

console.log('Cambiando el nombre ' + PersonaConstructor.nombre);

console.log(Persona); */
/* 
let Persona = {
    nombre: 'Juan',
    apellido: 'Efren',
    edad: 35,
    nombreCompleto: function(){
        return this.nombre + ' '+ this.apellido; //la palabra this nos refiere el contexto de este objeto
    }
} */

const { LanguageServiceMode } = require("typescript");

/* console.log(Persona.nombre);
console.log(Persona.nombreCompleto());
console.log(Persona); */

/* Persona.tel = '234565787';
Persona.te1 = '236673838';  *///agregramos un num diferente

/* console.log(Persona.tel);
console.log(Persona.nombreCompleto());
console.log(Persona); */

/* for(varPropiedad in Persona){
    console.log(Persona[varPropiedad]);
}

let personastring = JSON.stringify(Persona); //para ver tipo json
console.log(personastring); */


let Persona = {
    nombre: 'Juan',
    apellido: 'Efren',
    edad: 35,
    email:'yafat_34@servidor.com',
    idioma:'es',
    
    get leng(){
        return this.idioma.toUpperCase();
    },
    set (Lang){ //set leng(Lang)
        this.idioma = Lang.toLowerCase();
    }
} 
//console.log(Persona.leng);

Persona.lang = 'ES';
console.log(Persona.leng);
console.log(Persona.idioma);




