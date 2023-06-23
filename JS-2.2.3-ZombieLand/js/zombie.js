'use strict';

document.addEventListener("DOMContentLoaded", () => {
    let zombie = document.querySelector("#zombietomb");
    zombie.innerHTML = '<img src="./img/zombie.png" id="zombieT">';
    let momie = document.querySelector("#zombieT");
    let move = 0;
    let zombieWidth = zombie.offsetWidth;
    console.log(zombieWidth);
    let zombieMomie = momie.offsetWidth;
    console.log(zombieMomie);
    let timeout;
    let direct = 0 ;
    let directY = 0 ;


    function displayZombie() {
        move -= zombieWidth;
        zombie.style.overflow = "hidden";

        if(move <= -zombieMomie+100) {
            move = -zombieMomie+100;
            clearTimeout(timeout);
        };
        

        timeout = setTimeout(() => {
            momie.style.transform = "translateX(" + (move) + "px)";
            displayZombie();
        }, 200);


        document.addEventListener("keydown", function (event) {
            
            console.log(event.key);
            if (event.key === "ArrowRight") {
                direct++
                zombie.style.transform = "translateX(" + (direct) + "px)";
            }else if(event.key === "ArrowLeft"){
                direct -=1
                zombie.style.transform = "translateX(" + (direct) + "px)";
            }

            if (event.key === "ArrowDown") {
                directY++
                zombie.style.transform = "translateY(" + (directY) + "px)";
            }else if(event.key === "ArrowUp"){
                directY -=1
                zombie.style.transform = "translateY(" + (directY) + "px)";
            }

    
            
        });
    }

    displayZombie();

  


});
