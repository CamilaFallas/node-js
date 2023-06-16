// Utiliza un módulo nativo de Node.js para leer el contenido de un archivo llamado "datos.txt". Si el 
// archivo no existe, lanza una excepción con el mensaje "El archivo 'datos.txt' no existe". Muestra en 
// consola el contenido leído

const fs = require('fs');

function readFileContent() {
  try {
    if (fs.existsSync('datos.txt')) {
      const content = fs.readFileSync('datos.txt');
      console.log("Contenido del archivo 'datos.txt':");
      console.log(content);
    } else {
      throw new Error("El archivo 'datos.txt' no existe");
    }
  } catch (error) {
    throw error;
  }
}

module.exports = readFileContent;