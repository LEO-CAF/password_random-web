const dom_min=document.querySelector("#min");
const dom_masc=document.querySelector("#masc");
const dom_num=document.querySelector("#num");
const dom_spec=document.querySelector("#spec");

const dom_lung=document.querySelector("#lung");
// const dom_live=document.querySelector("#live");
const dom_pw=document.querySelector("#pw");

const min="abcdefghijklmnopqrstuvwxyzàèéìòù";
const masc="ABCDEFGHIJKLMNOPQRSTUVWXYZÀÈÉÌÒÙ";
const num="0123456789";
const spec="\/?!*+@#€£$%&=^|°§{}[]";

let tot="";
let lung=0;
let char="";
let pw="";

function pulsante(){
    tot="";
    pw="";

    if(dom_min.checked == true){
        tot=tot+min;
    }
    if(dom_masc.checked == true){
        tot=tot+masc;
    }
    if(dom_num.checked == true){
        tot=tot+num;
    }
    if(dom_spec.checked == true){
        tot=tot+spec;
    }

    tot=Array.from(tot);

    lung=dom_lung.value;

    if(tot.length==0){
        alert("Inserire almeno una Tipologia di Carattere");
    }else{
        for(i=0;i<lung;i++){
            char=tot[Math.floor(Math.random()*tot.length)];
            pw=pw+char;
        }
    }

    dom_pw.innerHTML=pw;
}
