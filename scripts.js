//almacenamos en la variable la etiqueta de html que tiene como id player
const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
const reestarGame = document.getElementById("reestarGame")
const board = document.getElementById("board")
let scoreInterval;
let interval;
let score = 0;
const buttonPlayStop = document.getElementById("buttonPlayStop");
const Final =document.getElementById("final")

//creamos un evento de click para agregar una animacion con la clase llamada playerJump para hacer que salte el dino
board.addEventListener("click", function () {
  playerJump();
});
//quitamos la animacion que tiene player la quitamos con el evento animationend
player.addEventListener("animationend", () => {
    removeJump();
});
function removeJump(){
    player.classList.remove("playerJump")
}
function playerJump(){
    player.classList.add("playerJump");

}

function removeCactus(){
    cactus.classList.remove("cactusMovement");
}
function placeCactus(){
    cactus.classList.add("cactusMovement");
}
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
        Final.classList.remove("over")
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


reestarGame.addEventListener("click",restarGame);

function restarGame(){
    resetScore();
    removeJump();
    removeCactus()
    void cactus.offsetWidth
    placeCactus();
    
   
    
}

function resetScore(){
    score=0;
    document.getElementById("score").innerText=0;
    
}

document.addEventListener("keyup",(event)=>{
    if(event.key=="ArrowUp"){
        playerJump();
    }
    if(event.key.toLocaleLowerCase()=="w"){
        playerJump();
    }
})

function colision(etiqueta){
    let x,y,ancho,alto;
    ancho=etiqueta.getBoundingClientRect().left;
    x=ancho+etiqueta.getBoundingClientRect().width;
    alto=etiqueta.getBoundingClientRect().top;
    y=alto+etiqueta.getBoundingClientRect().height;

    return {

        x ,y ,ancho,alto
    }
}

function colisionDino(){
    if((colision(player).x)>(colision(cactus).ancho)&&(colision(player).ancho)<(colision(cactus).x)&&(colision(player).y)>(colision(cactus).alto)){
        cactus.style.animationPlayState = "paused";
        player.style.animationPlayState = "paused";
        background.style.animationPlayState = "paused";
        stopScore();
        restarGame();
        buttonPlayStop.classList.toggle("play");
        Final.classList.toggle("over")
    } 

}


 interval=setInterval(()=>{
     colisionDino();
 },100);

