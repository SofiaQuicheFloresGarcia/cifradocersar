window.cipher={

  encriptar: (text,offset) => {

      console.log("text", text, "offset", offset);
      let text = "";
      let ascii = 0;
for(let i = 0; i < text.length; i++){
    if (text.charCodeAt(i)  >= 65 && text.charCodeAt(i) <= 90) {
        ascii = (text.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
    } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        ascii = (text.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;

    } else {
        ascii = text.charCodeAt(i);
      }

   cipher += String.fromCharCode(ascii);

 }
}
let text = document.getElementById ("encriptar")

    var pat =/^[0-9A-z\s]*$/;
    if(!pat.text(text)) {return 'Texto no válido';}

    if (text.charCodeAt(i)  >= 65 && text.charCodeAt(i) <= 90) {
    ascii = (text.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;

      let letras ='abcdefghijklmnopqrstuvwxyz'+(space?' ':'');
    if(!space) {for(var a=0;a<text.length;a++) {txt=text.replace(' ','');
    var n=n%let.length,r='';
        n=n<0?let.length+n:n;}}

    for(var a=0;a<text.length;a++){

        l=let.charAt((let.indexOf(text.charAt(a))+n)%let.length);
        r+=l.length==0?' ':l;
    }
    return text;
},

function  desencriptar (){

desencriptar: (text2,offset) => {

let text2 ='';
let ascii = 0;
 for(i = 0; i < desen.leghth; i++) {
   if (desen.charCodeAt (i) >= 32 && desen.charCodeAt(i) <= 64){
     let  transfor2 = (desen.charCodeAt(i));
     let workEncryp2 = string.fromCharCode (transfor2);
     text2 +=  workEncryp2;
            } else {
                if(desen.charCodeAt(i) >= 97 && desen.charCodeAt(i) <= 122) {

                    let transfor2 = ((desen.charCodeAt(i)- 122 - offset) % 26)+ 122;
                    let workEncryp2 = String.fromCharCode(transfor2);
                     text2 += workEncryp2;
                } else {

                    if(desend.charCodeAt(i) >= 65 && desend.charCodeAt(i) <= 90) {

                    let transfor2 = ((desen.charCodeAt(i)- 90 - offset) % 26)+ 90;
                    let workEncryp2 = String.fromCharCode(transfor2);
                    text2 += workEncryp2;
                  }
              }
            }
            if(desen.charCodeAt(i) >= 91 && desen.charCodeAt(i) <= 96) {

              let transfor2 = (decod.charCodeAt(i));
              let workEncryp2 = String.fromCharCode(transfor2);
              text2 +=  workEncryp2;
            }
            if(desen.charCodeAt(i) >= 123 && desend.charCodeAt(i) <= 126) {

              let transfor2 = (decod.charCodeAt(i));
                            let workEncryp2 = String.fromCharCode(transfor2);
                            text2 +=  workEncryp2;
                          }
                        }
                      return text2;
                    
                  }
              };
