// Crea una variable nombreArchivo que contenga el nombre de un archivo con extensión, por ejemplo, "main.js".
// Utiliza el módulo path para extraer y mostrar la extensión del archivo en la consola.
const path = require("path");

// Creamos el archivo
const nombreArchivo = "main.js";

// Extraer la extensión del archivo
const extension = path.extname(nombreArchivo);

console.log("La extensión es:", extension);