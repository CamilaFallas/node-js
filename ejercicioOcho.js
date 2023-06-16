// Llama a la función `writeToFile` con el siguiente mensaje: "Examen finalizado". Si ocurre alguna 
// excepción, captúrala y muestra en consola el mensaje de error correspondiente.

const fs = require('fs');

function writeToFile(message) {
  try {
    fs.writeFileSync('texto.txt', message);
    console.log("El mensaje se ha escrito correctamente en el archivo 'texto.txt'");
  } catch (error) {
    throw new Error("Error al escribir en el archivo 'texto.txt'");
  }
}

try {
  writeToFile("Examen finalizado");
} catch (error) {
  console.error(error);
}


module.exports = writeToFile