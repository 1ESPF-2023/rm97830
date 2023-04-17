// Recuperando o botão com o getElementByid
const botaoelement = document.getElementById('btn-1');

// Recuperar um item específico com fução querySelector(parâmetro)
//const seletor = document.querySelector('li');
//console.log(seletor);

// Recuperar uma lista de elementos com a função querySelectorAll
const seletores = document.querySelectorAll('li');

seletores.forEach((item)=>{

    if (item.textContent == 'Item-15') {
    let meuItem = item;
    console.log(`Itens selecionado: ${meuItem.textContent}`);
    meuItem.textContent = 'Tá feito!'
    }
})

// setTimeOut
// setInterval
// Random
// Math.Cell
// Math.Random
// Math.Floor