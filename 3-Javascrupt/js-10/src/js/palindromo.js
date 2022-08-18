/* 
const palindromo = (palabra)=>{
    const palabraInvertida = palabra.split("").reverse().join("");
    
    if(palabraInvertida === palabra){
        return 'es un palindromo'
    }else{
        return 'no es un palindromo'
    }

}
 */
const palindromo = (palabra)=>{
    let palabraInvertida = palabra.split("").reverse().join("");
    return palabra === palabraInvertida ? 'es un palindromo' : 'No es un palindromo';
}
// (condicion) ? verdadera : false
// (condicion) ?    if     : false
//console.log(palindromo('ojo'));

module.exports=palindromo

