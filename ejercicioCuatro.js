// Crea una función llamada `formatPokemon` que acepte el nombre y los tipos de un Pokémon como 
// parámetros y devuelva una cadena de texto formateada con el siguiente formato: "El Pokémon 
// {nombre} es de tipo {tipo1} y {tipo2}". Si el Pokémon solo tiene un tipo, la cadena de texto debe ser: "El 
// Pokémon {nombre} es de tipo {tipo1}". Utiliza el módulo `chalk` para que los nombres de los Pokémon y 
// los tipos sean de color amarillo. Si alguno de los parámetros es nulo o indefinido, lanza una excepción 
// con el mensaje "Datos de Pokémon incompletos"

const chalk = require('chalk');

function formatPokemon(nombre, tipo1, tipo2) {
  if (!nombre || !tipo1) {
    throw new Error("Datos de Pokémon incompletos");
  }

  let text = chalk.yellow(`El Pokémon ${nombre}`);

  if (tipo1) {
    text += chalk.yellow(` es de tipo ${tipo1}`);
  }

  if (tipo2) {
    text += chalk.yellow(` y ${tipo2}`);
  }

  return text;

}

module.exports = formatPokemon
