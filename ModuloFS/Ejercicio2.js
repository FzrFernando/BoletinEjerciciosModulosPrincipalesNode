//Lee el contenido del archivo nuevoArchivo.txt que creaste en el ejercicio anterior utilizando el módulo fs.
//Muestra el contenido del archivo por pantalla.Muestra el contenido del archivo por pantalla.
let fs = require("fs");

fs.readFile("nuevoArchivo.txt",function(err, data) {
    console.log(data.toString());
})