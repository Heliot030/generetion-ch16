
//url a consumir
const urlPokemon="https://pokeapi.co/api/v2/pokemon/pikachu"

//eleemntos del dom
const imgPokemon= document.getElementById("img-pokemon")
console.log(imgPokemon);

const idPokemon= document.getElementById("id-pokemon")
console.log(idPokemon);

const nombrePokemon= document.getElementById("nombre-pokemon")
console.log(nombrePokemon);


//funciones
async function obtenerPokemon(url){
    const repuesta = await fetch(url)
    const datos = await repuesta.json()
   /*  console.log(datos);
    console.log(datos.forms[0].name);
    console.log(datos.abilities);
    console.log(datos.id);
    console.log(datos.types);
    console.log(datos.sprites.other["official-artwork"].front_default); */

    const pokemon ={
        nombre:datos.forms[0].name,
        habilidad:datos.abilities,
        id:datos.id,
        tipos:datos.types,
        imagen:datos.sprites.other["official-artwork"].front_default

    }  
    //console.log(pokemon.imagen);

    //imgPokemon.src = pokemon.imagen;
    //idPokemon = 
    //nombrePokemon

}
obtenerPokemon(urlPokemon)