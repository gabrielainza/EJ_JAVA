/*Las promesas son un concepto fundamental en JavaScript que se utiliza para manejar tareas asíncronas de manera más organizada y legible.
Sirven para resolver el problema de ejecutar código asíncrono de una manera más ordenada y controlada, 
evitando el llamado "callback hell" (infierno de callbacks) y mejorando la estructura del código. */

let promesa = new Promise((seCumple, noseCumple) => {
    //seCumple('Muy bien!!')});
    setTimeout(() => { // al agregar setTimeout podemos dar la instruccion que esta funcion corra hasta que pasen 5 seg. 
        seCumple('No Cumpliste muy Mal!!');
    },5000); // aqui elegimos los segundos en milisegundos por eso para usar 5 segundos escribimos 5,000). 
});

promesa
    .then(texto => texto + ' intenta nuevamente el proximo año ya que!!!')
    .then(texto => console.log(texto))
    .catch(problema => console.log('X' + problema))
    .finally(() => console.log('Gracias!')) // esto va correr al final como su nombre lo dice finally al final. 

console.log("En exactamente 5 segundos aparecera una promesa, cumplida o no cumplida."); // Esta impresion es al instante. no demora.
