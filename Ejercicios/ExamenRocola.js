// tienes una lista de dif canciones, son canciones famosas de dif autores y tienes que crear una rocola. 
// Donde las canciones no se repitan, cada vez que presiones play va tomar una cancion al azar y no se va volver a repetir esa cancion
// minimo hasta que hayan pasado 4 canciones mas. 

class Rocola {

    temas = [
        'A','B','C','F','G'
    ];
    

    queue = [];

    play(k) {
        if (this.queue.length >= k) {
            let primero = this.queue.shift();
            this.tema.push(primero);
        }
        let indiceRandom = Math.floor(Math.random() * this.temas.length);
        let tema = this.temas.splice(indiceRandom, 1)[0];
        this.queue.push(tema);
        return tema;
    }
}

let rocola = new Rocola();
console.log(rocola.play(4));