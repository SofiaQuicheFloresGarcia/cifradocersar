const index =() => {

}
index();
const ciphercall =() => {
  let toCipher= document.getElementById('toCipher').value;
  let offset= document.getElementById('offset').value;

let encriptar = cipher.encriptar(toCipher, offset);
return drawinput(encriptar);
}

const deciphercall = () => {
toDecipher= document.getElementById('toDecipher').value;
offset= document.getElementById('offset').value;
let decode = cipher.desen(toDecipher, offset)
 return drawoutput(desencriptar);

}
const drawinput = (input) => {
document.getElementById('toCipher').value="";
return document.getElementById('toDecipher').value = input;

}
const drawoutput = (input) => {
document.getElementById('toDecipher').value="";
return document.getElementById('toCipher').value = input;
}
