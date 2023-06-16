// Crea una función llamada `writeToFile` que acepte un mensaje como parámetro y lo escriba en un 
// archivo llamado "resultados.txt". Si ocurre algún error al escribir en el archivo, lanza una excepción con 
// el mensaje "Error al escribir en el archivo 'resultados.txt'". Utiliza un módulo nativo de Node.js para 
// realizar esta operación

const fs = require('fs');

function writeToFile(message) {
  try {
    fs.writeFileSync('resultados.txt', message);
    console.log("El mensaje se ha escrito correctamente en el archivo 'resultados.txt'");
  } catch (error) {
    throw new Error("Error al escribir en el archivo 'resultados.txt'");
  }
}

module.exports = writeToFile;