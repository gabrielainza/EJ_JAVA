// Esto tambien es una web API. 
let i = 0;
/*setInterval(() => {
    console.log(i++)
}, 2000);*/

// esto lo que va hacer es imprimir cada 2 segundos y aparte de eso como le agreamos i++ va a ir sumando 1 a each time. 
// y agregando numeros cada vez. 

// ahora si queremos cancelar la setInterval tenemos que primero guardarlo en una funcion. y despues usar clearInterval
// por ejemplo:

let interval = setInterval(() => {
    console.log(i++)
}, 1000);


setTimeout(() => {
    clearInterval(interval); // esto funciona para cancelar el setInterval que a determinado tiempo podamos dejar de imprimir. 
}, 5000);

/* Ejercicio #1: vas a hacer una lista del 1 al 10, pero al momento de llegar al 6 tiene que parar y tambien imprime un
titulo que diga 'Ejercicio # 1'. */
/*console.log('Ejercicio # 1:')
let i = 1; 
let interval = setInterval(() => {
    console.log(i++)
}, 1000);

setTimeout(() => {
    clearInterval(interval)
}, 7000);
// Ejercicio terminado. */

// Ejercicio # 2: Haz que se muestre 'Alarma' en la consola cada 3 segundos.
/* let i = 'Alarma'
setTimeout(() => {
    console.log(i);
}, 3000); */