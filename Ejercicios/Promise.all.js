/*  Promise.all se utiliza para ejecutar múltiples promesas de manera simultánea y esperar a que todas se resuelvan. */

let promise1 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => {reciboDatos('datos1');}, 5000);
});

let promise2 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => { reciboDatos('datos2'); 
        
    }, 2000);
})

Promise.all([promise1,promise2]) // aqui podemos ejecutar ambas acciones, al igual que si tuviesemos mas promesas tambien se pueden. 
    .then((listas) =>{
        console.log(listas);
    });

/* ejercicio para resolver 
Vemos un par de promesas que se resuelven, una después de 1 segundo y otra que después de 2 segundos.
Concatena los resultados cuando se hayan cumplido las promesas e imprímelos con el siguiente codigo. */

const promesa1 = new Promise((resolve) => {
	setTimeout(() => { resolve('Hola'); }, 1000);
});
const promesa2 = new Promise((resolve) => {
	setTimeout(() => { resolve('Mundo') }, 2000);
});

Promise.all([ promesa1,promesa2])
    .then((resultado) =>{
        console.log(resultado);
    });