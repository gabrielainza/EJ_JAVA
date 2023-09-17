// Haz dos funciones que te permita sumar los numeros del 1 al 8 que sumandose 1+2+3+4... te den el valor 36 al final. 

function sumaHasta36() {
    let suma = 0;
    for (let i = 1; i <= 8; i++) {
    suma += i;
    }
    return suma;
}

const resultado = sumaHasta36();
console.log(resultado); // Esto imprimirá 36 en la consola

function sumar36(){
    let sumar = 0;
    for (let numeros of arguments) {
        sumar += numeros;
    }
    return sumar;
}
console.log(sumar36(1,2,3,4,5,6,7,8));