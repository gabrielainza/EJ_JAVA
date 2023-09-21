// esto se utiliza para atrapar errores quiere decir lo vamos a englobar en un texto que queramos por ejemplo : "Errorisimo."
try {
    let ob = {};
    await
} catch (error) {
    console.log('Errorisimo.: ' ); // SI QUITAMOS EL error en azul solo va imprimir en pantalla Errorisimo. agrega error y ve el cambio.  
} finally {
    console.log("Esto siempre se ejecuta");
}