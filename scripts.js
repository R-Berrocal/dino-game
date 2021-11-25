//almacenamos en la variable la etiqueta de html que tiene como id player
const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
let scoreInterval;
let score = 0;
const buttonPlayStop = document.getElementById("buttonPlayStop");

//creamos un evento de click para agregar una animacion con la clase llamada playerJump para hacer que salte el dino
document.addEventListener("click", function () {
  player.classList.add("playerJump");
});
//quitamos la animacion que tiene player la quitamos con el evento animationend
player.addEventListener("animationend", () => {
  player.classList.remove("playerJump");
});

function pauseGame(){
    cactus.style.animationPlayState = "paused";
    player.style.animationPlayState = "paused";
    background.style.animationPlayState = "paused";
    stopScore();
}
function resumeGame(){
    cactus.style.animationPlayState = "running";
    player.style.animationPlayState = "running";
    background.style.animationPlayState = "running";
    resumeScore();
}

function stopScore(){
    clearInterval(scoreInterval);
}
function resumeScore(){
    scoreInterval= setInterval(() => {
        score++;
        document.getElementById("score").innerText = score;
    }, 1000);
}


//creamos el boton de pausa y play
buttonPlayStop.addEventListener("click", () => {
    //toggle nos permite cambiar la clase que trae por defecto y añadirle otra clase
    
    if(buttonPlayStop.classList.contains("play")){
        resumeGame();
    }else{
        pauseGame();
    }
    buttonPlayStop.classList.toggle("play");
    // si es un boton de play continua el juego
    //si es un boton de pausa, pausa el juego
});
//creamos un sistema de puntos, que va a ir aumentando cada segundo
scoreInterval= setInterval(() => {
  score++;
  document.getElementById("score").innerText = score;
}, 1000);

const reestarGame = document.getElementById("reestarGame")

reestarGame.addEventListener("click",restarGame);

function restarGame(){
    alert("Reestar game");
}

function resetScore(){
    
}