class Persona{
  /*   let nombre;
    let apellido; eñ constructor 
    ya lo hace   */
    constructor(nombre, apellido){ // estoo pertenece a class
    this.nombre = nombre; // this va ala clase Persona privada, y el otro nombre es el de constructor lo llama  
    this.apellido=apellido;        
    }

    get nombre(){ //retorna valor
        return this._nombre;
    }
    set _nombre(nombre){ //envia valor
        this._nombre =nombre;
    }
}

let persona1= new Persona('Jose','Maria');
console.log(persona1);

let persona2= new Persona('Joses','Maaaaria');

console.log(persona2);

