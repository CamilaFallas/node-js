const fetchPokemon = require('./ejercicioDos.js');
const getPokemon = require('./ejercicioTres.js');
//2
fetchPokemon(5);

//3
getPokemon(25);

//4
try {
  const pokemon = formatPokemon(nombre, tipo1, tipo2);
  console.log(pokemon);
} catch (error) {
  console.error(error);
}

//5


//6
try {
  readFileContent();
} catch (error) {
  console.error(error.message);
}

//8
writeToFile("¡Hola, mundo!");
