/* Primer Ejercicio. Crea un bucle while que imprima los números del 1 al 5 en la consola.
let i = 0; */

let i = 0;

while (i < 6) {
    console.log(i)
    i++;}

/* Segundo Ejercicio de la siguiente lista substrae solo los numeros que son menores a 30. 
lista = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51]; */

const lista = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51];

// Utilizamos la función filter para obtener los números menores a 30
const numerosMenoresA30 = lista.filter(numero => numero < 30);

console.log(numerosMenoresA30);

