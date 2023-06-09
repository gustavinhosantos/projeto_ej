const tabuleiro = document.getElementById("tabuleiro");
const espacos = document.querySelectorAll(".espaco");
//const butao = document.getElementById("button");

let jogador = "X";
let computador = "O";
let acabou = false;
// let empatou = false;
let jogadas = 0;
//let disponiveis = [0,1,2,3,4,5,6,7,8];

jogada();


function ganhou(){
    const possibi = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < possibi.length; i++) {
        const combo = possibi[i];
        if (
        espacos[combo[0]].textContent === jogador &&
        espacos[combo[1]].textContent === jogador &&
        espacos[combo[2]].textContent === jogador){
            acabou = true;
            alert(`Jogador ${jogador} venceu!`);
            document.location.href="./tela03.html";
            break;

        }if (
        espacos[combo[0]].textContent === computador &&
        espacos[combo[1]].textContent === computador &&
        espacos[combo[2]].textContent === computador){
            acabou = true;
            alert(`Jogador ${computador} venceu!`);
            document.location.href="./tela03.html";
            break;
        }
        /*
        if(jogadas === 8 && !acabou){
            alert("empatou!");
            //ir para tela03.html
            break;
        }
        */

    }
}


function jogadacomputador(){

    while(true){
        aux = Math.floor(Math.random() * 10);
        if(!acabou && espacos[aux].textContent === ""){
            espacos[aux].textContent = computador;
            ganhou();
            jogadas++;
            break;
        }
    }
}

function jogada(){
    for (let i = 0; i < espacos.length; i++){
       espacos[i].addEventListener("click", function() {
            if (!acabou && this.textContent === "") {
                this.textContent = jogador;
                ganhou();
                jogadas++;
                jogadacomputador();
                ganhou();
        }
    });
    }
}
