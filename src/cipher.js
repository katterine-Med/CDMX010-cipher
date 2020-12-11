const cipher = {
  
  let string mensaje =document.getElementById("mensaje").value;
  Console.log(mensaje)
  }
 
  cipher.encode(offset, string): offset;
  let output= [];
  for (let i=0; i <String.length; i++){
    let asciiLetter= string.charCodeAt(i);
    let stringResult= (((asciiLetter-65)+offset)%26)+65;
    output[i]=String.fromCharCode(stringResult);
    console.log(output);
  
  function descifrar(); {
    
  }
export default cipher;
