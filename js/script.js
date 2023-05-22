// Recuperando o botão com o getElementById
//const botao = document.getElementById("btn-1");

// Recuperar um item especifico com a
// Função querySelector(parâmetro)
//const seletor = document.querySelector("li")
//console.log(seletor.textContent)

// Recuerar uma lista de elementos com a função
//querySelecorAll
//const seletores = document.querySelectorAll("li");
 
//seletores.forEach((item)=>{

//    if (item.textContent == "Item-15") {
//        let meuItem = item;
//        console.log(`Item selecionado : ${meuItem.textContent}`);
//        meuItem.textContent = "TÁ DOMINADO!!"   
//    }
//})

// Para estudar
//setTimeOut
//setInterval
//Random
//Math.Ceil arredonda os números pra cima
//Math.Random gera um número aleatório entre 0 e 1
//Math.Floor arredonda os números pra baixo
//Math.Round arredonda os números aleatoriamente

//let tmp = "";

//function mudarCor() {

//    let r = 0;
//    let g = 0;
//    let b = 0;
    
//    r = Math.round(Math.random() * 255);
//    g = Math.round(Math.random() * 255);
//    b = Math.round(Math.random() * 255);
    
//    const cabecalho = document.querySelector(".cabecalho");
//    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

//    tmp = setTimeout(mudarCor, 1000);

// }

//mudarCor();

// Maneira mais longa de fazer:
//function mudaBanner() {

//    const imgElement1 = document.querySelector(".banner-1 img");
//    let num = Math.ceil(Math.random() * 3);
//    imgElement1.src = "./img/banner-lateral-"+num+".png";
//    setTimeout(mudaBanner2, 2000);

//}

//function mudaBanner2() {

//    const imgElement2 = document.querySelector(".banner-2 img");
//    let num = Math.ceil(Math.random() * 3);
//    imgElement2.src = "./img/banner-lateral-"+num+".png";
//    setTimeout(mudaBanner, 2000);

//}

//mudaBanner();

// Fazendo em apenas uma função
//function mudaBanner() {

//    const imgElement1 = document.querySelector(".banner-1 img");
//    let num = Math.ceil(Math.random() * 3);
//    imgElement1.src = "./img/banner-lateral-"+num+".png";

//    const imgElement2 = document.querySelector(".banner-2 img");
//    num = Math.ceil(Math.random() * 3);
//    imgElement2.src = "./img/banner-lateral-"+num+".png";

//    setTimeout(mudaBanner, 2000);

//}

//mudaBanner();

const botao = document.querySelector("button");

botao.addEventListener("click", function(){
    
    if(this.textContent = "LIGAR"){
        const imgElement = document.querySelector("img[alt='Luz Desligada']");
        imgElement.src = "./img/pic_bulbon.gif";
        imgElement.alt = "Luz Ligada";
        this.textContent = "DESLIGAR";
    }else{
        const imgElement = document.querySelector("img[alt='Luz Ligada']");
        imgElement.src = "./img/pic_bulboff.gif";
        imgElement.alt = "Luz Desligada";
        this.textContent = "LIGAR";
    }
});

// Estudar em casa querySelectorAll
// Exercício:

//const botoes = document.querySelectorAll("button");

//botoes.forEach( (botao)=>{
//    botao
//} );