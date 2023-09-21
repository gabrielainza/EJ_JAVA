// esto es una web API, una funcion que esta disponible, que nos permite correr una funcion despues de en un tiempo determinado... 

// funciona para mandar codigo a un cierto tiempo determinado por ejemplo 0. (es en milisegundos osea 3,000 es 3 segundos.)
setTimeout(() => {
    console.log('Cualquier codigo');
}, 3000);


// si tomamos el ejemplo de arriba y primero imprimes en pantalla algo y despues a los 3 segundos aparecera ese
// a eso se le llama asincronia. 
console.log("Hola");


// Ahora si queremos cancelar la funcion de arriba hacemos esto. 

let timeout = setTimeout(() => {
    console.log('Cualquier codigo');
}, 3000);

clearTimeout(timeout) // Esto lo que hace es eliminar el tiempo asignado y no ejecutarlo.

// ejercicio. Crea un temporizador de 2 segundos usando setTimeout que llame a la funcion mostrarMensaje. 

let mostrarMensaje = setTimeout(() => {
    console.log('Mostrar Mensaje');
}, 2000);
