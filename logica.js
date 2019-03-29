alert('Buen día :)');
document.getElementById('output').style.visibility= 'hidden';
document.getElementById('entradaenlbs').addEventListener('input',function(e){
    console.log(1234);
    // cuando dice function(e) nos referimos a que estamos creando la función e con parámetros de entrada
    // Esto lo hacemos para saber que sí está corriendo la funcion
    let libras = e.target.value;
    // aquí creamos la variable gramos y la igualamos al valor que le pongan de entrada a la función "e" que creamos
    console.log(libras);
    document.getElementById('output').style.visibility= 'visible';
    document.getElementById('outputengramos').innerHTML = libras/.0022046;
    document.getElementById('outputenkilogramos').innerHTML = libras/2.2046;
    document.getElementById('outputenonzas').innerHTML= libras*16;
});