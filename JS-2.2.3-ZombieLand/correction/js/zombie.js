'use strict';

document.addEventListener("DOMContentLoaded", ()=>{

    let zombie = document.querySelector("#zombietomb");
    let position = 0;
    let timeout;
    let arg = 0;
    let leftClickCount;
    

    function wakeZombie() {

            position += -100;

            setTimeout( ()=>{
                
                zombie.style.backgroundPosition = `${position}px`;
                
                requestAnimationFrame(wakeZombie);
                
            },200)
        
    }

    wakeZombie()

    
})