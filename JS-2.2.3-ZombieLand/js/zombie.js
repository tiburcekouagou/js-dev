'use strict';

document.addEventListener("DOMContentLoaded", ()=>{

    let zombie = document.querySelector("#zombietomb");
    let zombieSprite = document.getElementById("zombie")
    // zombie.style.overflow = "hidden";
    let position = 0;
    let timeout;
    let arg = 0;
    let clickCount = 0;
    let leftClickCount = 0;
    let rightClickCount = 0;
    

    function wakeZombie() {

            position += -100;

            if (position <= -zombieSprite.offsetWidth + 100){
                
                position = -zombieSprite.offsetWidth + 100;
                clearTimeout(timeout);

            }

            timeout = setTimeout( ()=>{
                
                zombieSprite.style.transform = `translate(${position}px)`;
                
                requestAnimationFrame(wakeZombie);
                
            },200)
        
    }

    document.addEventListener("keydown", (event)=>{

        if (event.code === "ArrowLeft"){

            zombie.style.transform = "rotateY(0deg)";
            zombie.style.marginLeft = `${arg}px`;
            
            arg -= 100; 

        } else if(event.code === "ArrowRight"){

            zombie.style.transform = "rotateY(180deg)";
            zombie.style.marginLeft =  `${arg}px`;
            arg += 100;

        }

    })

    wakeZombie()

     
})