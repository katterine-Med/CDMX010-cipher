import cipher from './cipher.js';
//declaracion de variables 

document.getElementById('okF').addEventListener("click", inicio, false);

//funcion para mostrar pantalla
function inicio() {
    let siguiente = document.getElementById('pantalla2');
    document.getElementById("pantalla1").style.display = "none";
    siguiente.style.display = 'block';

}
function final() {
    document.getElementById("pantalla2").style.display = "none";
    document.getElementById("pantalla1").style.display = "block";

}
//funcion para hacer mayusculas al ingresar texto usuario
const input = document.getElementById('mensaje')
input.addEventListener('input', function (evt) {

    input.value = evt.target.value.toUpperCase()
})
//funcion para cifrar
//declarar la variable desde html
//llamar los botones de html

var desplazamiento = document.getElementById("desplazamiento");
document.getElementById('cifrar').addEventListener("click", funcionCifrar, false);
document.getElementById('descifrar').addEventListener("click", funcionDescifrar,false);

// //funcion para cifrar

function funcionCifrar() {
    var des = Number.parseInt(desplazamiento.value);
    var mensaje_ya_cifrado = cipher.encode(des, input.value);
    
    document.getElementById('mensaje2').textContent = mensaje_ya_cifrado;
}
//funcion descifrar
const output = document.getElementById('mensaje2')
function funcionDescifrar() {
    var des = Number.parseInt(desplazamiento.value);
    var mensaje_descifrado = cipher.decode(des, output.value);

    document.getElementById('mensaje3').textContent = mensaje_descifrado;
    console.log(mensaje_descifrado);
}
console.log("hola");

//metodo encode y decode con parametro desplazamiento y cadena
// una funcion se declara como tal, al llamar una funcion se ejecuta una accion
/*para invocar un metodo se declara al objeto o clase, un metodo es la capacidad de un objeto. 
un conjunto de funcionalidades que dependen del objeto*/
//objeto es una coleccion de propiedades ejem: nombre y un valor
console.log(cipher);
