const cipher = {

encode:function(offset,string){
  let output= [];
  for (let i=0; i <string.length; i++){
    let asciiLetter= string.charCodeAt(i)
    let stringResult= (((asciiLetter-65)+offset)%26+65); //seguramente algo de aqui esta mal
    output [i]= String.fromCharCode(stringResult)
  }
  return output //retornar un string
}

  
 /*mensaje =document.getElementById("mensaje").value.toUpperCase();
 offset =document.getElementById('desplazamiento').value;
 offset=parseInt(offset,(desplazamiento))
 document.getElementById('cifrar')
  funtion cifrar (){
    let output= [];
    for (let i=0; i <string.length, i++){
      let asciiLetter= string.charCodeAt(i);
      let stringResult= (((asciiLetter-65)+offset)%26)+65);
      output[i]=String.fromCharCode(stringResult);
      console.log(stringResult);
     output [i]= String.fromCharCode(stringResult;)
    function descifrar(); {
      console.log (offset);
    }


 }
 

   //cipher.encode(offset, string): offset;
    let output= [];
   for (let i=0; i <string.length, i++){
     let asciiLetter= string.charCodeAt(i);
     let stringResult= (((asciiLetter-65)+offset)%26)+65);
     output[i]=String.fromCharCode(stringResult);
     console.log(stringResult);
    output [i]= String.fromCharCode(stringResult;)
   function descifrar(); {
     console.log (offset);
   }
 
  */
    
  }
export default cipher;
