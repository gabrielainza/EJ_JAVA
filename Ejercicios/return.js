/* crea una variable usuario con nombre: "Anna " y apellido: "Perez", crea una funcion que cambie el nombre de "Anna" a "Esteph",
el apellido a "Leyva" sin que se cree una mutacion en el codigo original, haz una copia para no afectar la funcion original */

let usuario = {
    nombre: 'Anna',
    apellido: 'Perez'
}

function cambiarNyA (objeto) {
    let copia = JSON.parse(JSON.stringify(objeto));
    copia.nombre = "Esteph";
    copia.apellido = "Leyva";
    return copia;
}
console.log(cambiarNyA(usuario))// se modifica el valor del objeto en la función
console.log(usuario)

function retorne27() {
    return 27; //retorna un numero
}
console.log(27)