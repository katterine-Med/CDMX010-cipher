import cipher from './cipher.js';

document.getElementById('okF').addEventListener("click",inicio,false);

//document.getElementById('ok').addEventListener('click', DisplayView);//
function inicio() {
    let siguiente = document.getElementById('pantalla2');
    document.getElementById("pantalla1").style.display="none";
    siguiente.style.display='block';
   
} 
function final() {
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla1").style.display="block";
   
} 
 const input = document.getElementById('mensaje')
 input.addEventListener('input', function(evt){
 
     input.value = evt.target.value.toUpperCase()})
 
 /*function cifrar (){
        let offset  =document.getElementById('desplazamiento').value;
        alert(desplazamiento);
       }
        document.getElementById('cifrar').addEventListener('click', cifrar);*/
    
//console.log(cipher);
