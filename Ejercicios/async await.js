let promesa = new Promise (( reciboDatos, noReciboDatos)=> {
    setTimeout(() => {
        reciboDatos('Datos')
    }, 5000);
});

async function asincrona() {
    let resultado = await promesa;
    console.log(resultado.toUppperCase());
}
asincrona();