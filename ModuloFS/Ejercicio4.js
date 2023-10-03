// Elimina el archivo nuevoArchivo.txt utilizando el módulo fs.
// Comprueba que el archivo se ha eliminado correctamente.
const fs = require("fs");

const archivoEliminar = "nuevoArchivo.txt";

fs.unlink(archivoEliminar, (err) => {
    if (err) {
        console.error("Error al eliminar el archivo:", err);
        return;
    }
    console.log("El archivo ha sido eliminado")
});