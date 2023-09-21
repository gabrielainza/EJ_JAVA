let contar = 0; 
// let instancia; ya no se necesita esto. 

const contador = {

    getInstancia(){
    return this;
    },

    getContador(){
        return contar;
    },

    incrementar(){
        return ++contar;
    }
}
Object.freeze(contador);

export { contador };

// const contador1 = new Contador();
// const contador2 = new Contador(); esta es otra forma de hacerlo. 

// console.log (contador1.getInstancia() === contador2.getInstancia());

// export default Object.freeze(new Contador());