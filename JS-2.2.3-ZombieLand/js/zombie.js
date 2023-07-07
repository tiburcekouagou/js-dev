'use strict';
document.addEventListener("DOMContentLoaded", ()=>{
    const zombie = document.getElementById("zombietomb");
    let position = 0;
    let setTimeoutId;
    let divWidth = zombie.scrollWidth;
    let imageWidth = divWidth*11;
    let moveZombie = 0;
    let sens = 1; 

    residentEvil ();
    
    function residentEvil() {
        zombie.style.backgroundPosition = `${position}px`
         setTimeoutId = setTimeout(() => {
            requestAnimationFrame(residentEvil)
        }, 500);
        
        position -= divWidth;
        if(position === -imageWidth ){
            clearTimeout(setTimeoutId);
        };
    }

    document.addEventListener("keydown", ((event) =>{
    if (event.key === "ArrowRight"){
        console.log("Right");
        zombie.style.transform = "rotateY(180deg)"
        moveZombie+=100;
        zombie.style.marginLeft = `${moveZombie}px`
    } else if(event.key === "ArrowLeft"){
        console.log("Left");
        zombie.style.transform = "rotateY(0deg)";
        moveZombie -=100;
        zombie.style.marginLeft = `${moveZombie}px`
    }
    }))
})