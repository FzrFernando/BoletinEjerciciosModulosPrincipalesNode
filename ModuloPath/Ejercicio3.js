// Crea una variable archivo que contenga el nombre de un archivo, por ejemplo, "first.js".
// Usa el módulo path para resolver la ruta absoluta de ese archivo y mostrarla en la consola.
const path = require("path");

// Archivo que buscamos
const archivo = "first.js";

// Resolvemos la ruta absoluta
const rutaAbsoluta = path.resolve(__dirname,archivo);

console.log("Ruta absoluta del archivo:", rutaAbsoluta);

// Duda:
// ¿Aunque el archivo no exista sale la ruta?
// Duda resuelta, si no hay archivo lo pone igual