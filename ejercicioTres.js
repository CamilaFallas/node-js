// Utilizando la función `fetchPokemon` y async/await, realiza una solicitud a la API mencionada y 
// muestra en consola el nombre y los tipos de un Pokémon con el número 25. Si el número proporcionado 
// es menor a 1 o mayor a 898, lanza una excepción con el mensaje "Número de Pokémon inválido". 

const fetchPokemon = require('./ejercicioDos');

async function getPokemon(numero) {
  if (numero < 1 || numero > 898) {
    throw new Error('Número de Pokémon inválido');
  }

  try {
    const response = await fetchPokemon(numero);
    const { name, types } = response.data;
    console.log('Nombre:', name);
    console.log('Tipo:', types);
    return response
  } catch (error) {
    console.error('Error en la solicitud HTTP:', error);
  }
}

module.exports = getPokemon;

