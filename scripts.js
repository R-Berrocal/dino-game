const player = document.getElementById("player");

document.addEventListener("click",function(){
    player.classList.add("playerJump");
});

player.addEventListener("animationend",()=>{
    player.classList.remove("playerJump");
});