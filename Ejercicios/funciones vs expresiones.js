// Corrige el Error que se presenta para poder imprimir ambos valores en consola. 

// console.log(sumar2(1,2))

// function sumar (a,b){
//     return a + b;

// }

// let sumar = function(a,b){
//     return a + b;
// }


console.log(sumar(1,2))  // cuando queremos imprimir el valor de una funcion no importa donde este en el codigo siempre lo va a tomar como
//si fuera al inicio .  


function sumar (a,b){ 
    return a + b;

}

let sumar2 = function(a,b){
    return a + b;
}
console.log(sumar2(1,2)) // para que puedas imprimir el valor de una variable debe de llevar 
//un efecto casacada por que si esta arriba no funciona. 

// la Expresion de una funcion no puede ser 

//Ejercicio dos Crea una expresión de función 'multiplicar' que tome dos parámetros a y b, los multiplique e imprima el resultado.
function multiplicar(a,b) {
    return a * b;
    
}
console.log(multiplicar(4,2))