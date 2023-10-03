// Abre el archivo nuevoArchivo.txt en modo de escritura y añade el texto "¡Esto es genial!" al contenido existente.
// Verifica que el archivo se ha actualizado correctamente.
const fs = require("fs");

//Archivo que queremos editar
const nuevoArchivo = "nuevoArchivo.txt"

//Leemos el archivo
fs.readFile(nuevoArchivo,(err,data) => {
    if (err) {
        console.error("No existe el archivo:", err);
        return;
    }

    //Ponemos el texto que vamos a añadir
    const contenidoNuevo = data + "\n¡Esto es genial!";

    
})