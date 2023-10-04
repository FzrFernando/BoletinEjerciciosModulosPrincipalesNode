// Se obtiene los argumentos de la línea de comando
const args = process.argv;

// Los dos primeros elementos de process.argv son rutas
const argumentos = args.slice(2);

console.log('Argumentos de línea de comandos:', argumentos);

// Tenemos que poner en la consola node args.js uno dos tres