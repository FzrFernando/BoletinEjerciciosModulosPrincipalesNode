// Crea una variable ruta que contenga la cadena "/test/test1//2slashes/1slash/tab/..".
// Usa el módulo path para normalizar la ruta y mostrar el resultado por pantalla.
const path = require("path");

const ruta = "/test/test1//2slashes/1slash/tab/..";

// Normalizamos la ruta
const rutaNormal = path.normalize(ruta);

console.log("Ruta normalizada:", rutaNormal);