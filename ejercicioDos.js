// Crea una función asincrónica llamada `fetchPokemon` que acepte un número como parámetro. Utiliza 
// axios para hacer una solicitud GET a la siguiente URL: `https://pokeapi.co/api/v2/pokemon/{numero}`. 
// Reemplaza "{numero}" con el número proporcionado como parámetro. La función debe retornar los 
// datos obtenidos en formato JSON.

const axios = require('axios');

async function fetchPokemon(numero) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`);
    console.log('Datos de respuesta:', response.data);
  } catch (error) {
    console.error('Error en la solicitud HTTP:', error);
  }
}

module.exports = fetchPokemon;
