'use strict';
document.addEventListener("DOMContentLoaded", function () {
    let position = 0;
    let tombeMove = 0;
    let sens = 1;
    let enter;
    let getOut;
    const tombe = document.querySelector("#zombietomb");
    function walkingDead() {
        if (position <= 0 && position >= -900) {
            tombe.style.display = "block";
            position -= 100;
            tombe.style.backgroundPosition = `${position}px`
            setTimeout(() => {
                getOut = requestAnimationFrame(walkingDead)
            }, 100);
        } 
    }
    function sleepingDead() {
        if (position <= -100) {
            position += 100;
            tombe.style.backgroundPosition = `${position}px`
            setTimeout(() => {
                enter = requestAnimationFrame(sleepingDead)
            }, 100);
            setTimeout(() => {
                tombe.style.display = "none";
            }, 1000);
        } 
    }
        walkingDead();

        document.addEventListener("keydown", function (marche) {
            if (marche.key === "ArrowRight") {
                sens = 1;
                tombeMove+= 10 * sens;         
                tombe.style.transform = `translateX(${tombeMove}px) rotateY(180deg)` ;
            }
            else if (marche.key === "ArrowLeft") {
                sens = -1;
                tombeMove+= 10 * sens;         
                tombe.style.transform = `translateX(${tombeMove}px) rotateY(0deg)`;
            }
            else if(marche.key === "ArrowDown"){
                cancelAnimationFrame(getOut)
                  sleepingDead();
            }
            else if (marche.key === "ArrowUp") {
                cancelAnimationFrame(enter)
                walkingDead();
            }   
        })
            
});