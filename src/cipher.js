const cipher = {

  encode: function (offset, string) {
    let output = "";
    for (let i = 0; i < string.length; i++) { //se inicializa i
      let asciiLetter = string.charCodeAt(i) //se convierte a ascii
      let stringResult = (((asciiLetter - 65) + offset) % 26 + 65); //donde el texto ingresado y convertido en ascii se apica la formula
      //output = output + stringResult;
     output = `${output}${String.fromCharCode(stringResult)}`
      //los signos de $ son para pasar varibales com string
      //los acentos al reves son para concatenar var dentro de un string
    }
    return output //retornar un string
  },

  decode: function (offset, string) {
    let output = "";
    for (let i = 0; i < string.length; i++) {
      let asciiLetter = string.charCodeAt(i);
      let stringResult2 = (((asciiLetter - 65) - offset) % 26 + 65);
      output = `${output}${String.fromCharCode(stringResult2)}`
     
    }
     return output 
    
  }
}
export default cipher;
