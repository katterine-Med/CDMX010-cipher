const cipher = {

  encode: function (offset, string) {
    let output = [];
    for (let i = 0; i < string.length; i++) {
      let asciiLetter = string.charCodeAt(i)
      let stringResult = (((asciiLetter - 65) + offset) % 26 + 65); //seguramente algo de aqui esta mal
      output[i] = String.fromCharCode(stringResult)
    }
    return output //retornar un string
  },
  
  decode: function(offset, string) {
    let output = "";
    for (let i =0;  i<string.length; i++) {
      let asciiLetter = string.charCodeAt(i);
      let stringResult2= (((asciiLetter - 65) - offset) % 26 + 65);
      output = output+stringResult2;
      stringResult2= output[i];
    }
    //return output 
    return string
   }
  }
export default cipher;
