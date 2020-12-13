import cipher from './cipher.js';

/*document.getElementById('ok').addEventListener('click', DisplayView);
function DisplayView(option) {
    const ok=document.getElementById("ok", string)HTMLElement;
    const funcionamiento=document.getElementById("funcionamiento");
    
    switch (option){
     case 1:
      ok.style.display='block';
      funcionamiento.style.display='none';
      console.log (ok.style.display);
      break;
     case 2:
      funcionamiento.style.display='block';
      ok.style.display='none';
      console.log(funcionamiento.style.display);
      break;
    }
} */

const input= document.getElementById('mensaje')
      input.addEventListener('input',function(evt){
          input.value= evt.target.value.toUpperCase()
         })
 /*function cifrar (){
        let offset  =document.getElementById('desplazamiento').value;
        alert(desplazamiento);
       }
        document.getElementById('cifrar').addEventListener('click', cifrar);*/
      
console.log(cipher);
