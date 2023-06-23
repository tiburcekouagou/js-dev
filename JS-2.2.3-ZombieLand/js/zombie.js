'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const tombe = document.getElementById("zombietomb");
    const marche = document.getElementById("walkingDead");
    const cacheur = document.querySelector(".cacheur")
    const image = document.querySelector(".tourne")
    let marchePose = -100;
    console.log(tombe);
    let position = 0;
    let widthWin = window.innerWidth;
    let iteration = 100;
    let positionE = (widthWin - 1100);
    function moveWithRAF() {
        if (position >= 0 && position <= 1000) {
            marche.style.display = "none";
                position+=iteration;         
                tombe.style.transform = "translateX(" + -position + "px)";
            } else if (position > 1000 && marchePose < (widthWin - 100)){     
                marchePose+=iteration;         
                image.style.transform = "rotateY(" + 180 + "deg)";
                marche.style.display = "block";
                cacheur.style.display = "none";
                tombe.style.display = "none";
                marche.style.transform = "translateX(" + marchePose + "px)";
            }
            else if(marchePose >= (widthWin - 100)){
                positionE += iteration;
                tombe.style.display = "block";
                marche.style.display = "none";
                tombe.style.transform = "translateX(" + positionE + "px)";
                cacheur.style.display = "block";
                cacheur.style.left = 0;
                
            }
        
    }
    setInterval(() => {
        moveWithRAF();
    }, 500);
    console.log(widthWin)
});
