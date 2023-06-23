'use strict';

document.addEventListener("DOMContentLoaded", ()=>{

    let zombie = document.querySelector("#zombietomb");
    let zombieSprite = document.getElementById("zombie")
    
    zombie.style.overflow = "hidden";
    console.log(zombieSprite.offsetWidth)
    let position = 0;
    let timeout;
    let arg = 0;
    

    function wakeZombie() {

            position += -100;
            if (position <= -zombieSprite.offsetWidth + 100){
                
                position = -zombieSprite.offsetWidth + 100;
                clearTimeout(timeout);

            }

            timeout = setTimeout( ()=>{
                
                zombieSprite.style.transform = `translate(${position}px)`;
                
                wakeZombie();
                
            },200)
        
    }

    document.addEventListener("keydown", (event)=>{

        if (event.code === "ArrowLeft"){

            console.log("left")
            arg -= 100;

        } else if(event.code === "ArrowRight"){

            arg += 100;

        }

        zombie.style.transform = `translate(${arg}px)`;

    })

    wakeZombie()

    
})