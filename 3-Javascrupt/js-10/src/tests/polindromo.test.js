const palindromo = require('../js/palindromo.js');

describe('Pruebas de la funcion palindromo',()=>{

    test('debe regresar"es un palindromo"',() =>{
        let mensaje = 'es un palindromo';
        let palabra = 'oso';
        expect(palindromo(palabra)).toBe(mensaje);
    })
});