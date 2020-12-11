import cipher from './cipher.js';
document.getElementById('ok').addEventListener('click', DisplayView);
function DisplayView(option) {
    const ok=document.getElementById("ok");
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
      
console.log(cipher);
