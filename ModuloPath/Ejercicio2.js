// Crea variables ruta1, ruta2, ruta3, ruta4 que contengan las cadenas "/first", "second", "something" y "then", respectivamente.
// Utiliza el módulo path para unir estas rutas en una sola y muestra el resultado por pantalla.
const path = require("path");

const ruta1 = "/first";
const ruta2 = "second";
const ruta3 = "something";
const ruta4 = "then";

// Unimos las rutas
const rutaJunta = path.join(ruta1,ruta2,ruta3,ruta4);

console.log("Ruta final:", rutaJunta);