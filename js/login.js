// User Strict força você a declarar as variáveis (é bom usar)
"use strict";

let user = "";
let senha ="";

const buttonSubmit = document.querySelector("#btnsubmit");

buttonSubmit.addEventListener("click", ()=>{

    const inputuser = document.querySelector("input[name='User']");
    const inputpassword = document.querySelector("input[name='Password']");

    const labeluser = document.querySelector("label[for='iduser']");
    const labelpass = document.querySelector("label[for='idpassword']");

    if(inputuser.value.length > 3 && inputpassword.value.length > 3){
//        inputuser.setAttribute("style","outline-color: #00ff00");
//        inputpassword.setAttribute("style","outline-color: #00ff00");
        labeluser.setAttribute("style","color: #00ff00;");
        labelpass.setAttribute("style","color: #00ff00;");
    }else{
//        inputuser.setAttribute("style","outline-color: #ff0000");
//        inputpassword.setAttribute("style","outline-color: #ff0000");
        labeluser.setAttribute("style", "color: #ff0000;");
        labelpass.setAttribute("style","color: #ff0000;");
    }

});

// Listener Global