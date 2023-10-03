// Crea un archivo llamado nuevoArchivo.txt utilizando el módulo fs.
// Escribe el texto "Hola, mundo" en el archivo.
// Verifica que el archivo se ha creado correctamente.
const fs = require("fs");

let escribir = fs.createWriteStream('nuevoArchivo.txt');

escribir.write("Hola, mundo");