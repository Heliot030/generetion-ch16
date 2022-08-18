/* .test.js para las pruebas */
const suma = require('../js/suma');
// pedir un valor esperado
//vamos a comparar el resultado

test('sumar 1 + 2 debe ser 3',()=>{
    expect(suma(1,2)).toBe(3) // expect solo recibe resultado
})

test('1+4 no debe ser 0 ',()=>{
    expect(suma(1,4)).not.toBe(0)
})