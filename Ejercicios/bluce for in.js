/*Itera a través del objeto 'persona' e imprime en la consola cada una de sus propiedades y valores usando la llave 'key'.
const persona = {nombre: 'Juan', edad: 25, ciudad: 'Madrid'};*/

// Respuesta Gabriel// 
const persona = {nombre: 'Juan', edad: 25, ciudad: 'Madrid'}
for (const key in persona) {
    console.log(key,persona[key]);
}
