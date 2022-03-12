// Codigo em javascript desenvolvido para executar jogo Genesis

let order = [];
let clikedOrder = [];
let score = 0;

/**
 * 0 - verde
 * 1 - vermelho
 * 2 - amarelo
 * 3 - azul
 */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Criando ordem aleatoria das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clikedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }

}

// Acende proxima cor
lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Confere cliques
let checkOrder = () => {
    for(let i in clikedOrder) {
        if(clikedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clikedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando proximo nivel!!`);
        nextLevel();
    }
}

// Função para click do usuario
let click = (color) => {
    clikedOrder[clikedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    

}

//Criar função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    } 
}

// função para proximo level
let nextLevel = () => {
    score++;
    shuffleOrder()
}

// função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu! \nClick em OK para iniciar novo jogo`);
    order = [];
    clikedOrder = [];

    playGame();

}

let playGame = () => {
    alert("Bem vindo ao Genesis!!");
    score = 0;

    nextLevel();

}

// Monitora os cliques
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Inicia o jogo ao carregar a pagina
playGame();