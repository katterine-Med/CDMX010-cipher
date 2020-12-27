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
//const mensaje2 =  input. document.getElementById('mensaje2');
//DECLARACION DE VARIABLES PARA CIFRAR
//const desplazamiento = Number.parseInt(document.getElementById("desplazamiento").value);
//document.getElementById('cifrar').addEventListener("click",  false);
//funcion para cifrar

var desplazamiento = document.getElementById("desplazamiento");
document.getElementById('cifrar').addEventListener("click", funcionCifrar, false);
// //funcion para cifrar
// console.log(cipher.encode(desplazamiento, input))
// document.getElementById('mensaje2').textContent = value;

function funcionCifrar() {
  var des = Number.parseInt(desplazamiento.value);
  var mensaje_ya_cifrado = cipher.encode(des, input.value);
  // console.log(mensaje_ya_cifrado);
  // console.log(desplazamiento);
  document.getElementById('mensaje2').textContent = mensaje_ya_cifrado;
  // document.getElementById('desplazamiento').textContent = null;
}






console.log(cipher);
