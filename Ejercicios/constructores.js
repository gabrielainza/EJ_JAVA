const instancia1 = {};

const instancia2 = Object.create(Object.prototype);

const instancia3 = new Object();

function Pelicula(nombre, año) {
    this.nombre = nombre;
    this.año = año; 
    this.toString = function(){
        return `La Pelicula ${this.nombre} es del año ${this.año}`;
    }

}
console.log(new Pelicula('Roma', 2018).toString());

// Esto es la forma nueva de hacerlo 
// class Pelicula {
//     constructor(nombre, año){
//         this.nombre = nombre;
//         this.año = año;
//     }


//     toString() {
//     return `La pelicula ${this.nombre} es del año ${this.año}`;
//     }
// }