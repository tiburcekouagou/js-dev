'use strict';

// document.addEventListener("DOMContentLoaded", () => {
//     let zombie = document.querySelector("#zombietomb");
//     zombie.innerHTML = '<img src="./img/zombie.png" id="zombieT">';
//     let momie = document.querySelector("#zombieT");
//     let move = 0;
//     let zombieWidth = zombie.offsetWidth;
//     console.log(zombieWidth);
//     let zombieMomie = momie.offsetWidth;
//     console.log(zombieMomie);
//     let timeout;
//     let posRight = 1;
//     let directRight = 0 ;
//     let directY = 0 ;


//     function displayZombie() {
//         move -= zombieWidth;
//         zombie.style.overflow = "hidden";

//         if(move <= -zombieMomie+100) {
//             move = -zombieMomie+100;
//             clearTimeout(timeout);
//         };


//         timeout = setTimeout(() => {
//             momie.style.transform = "translateX(" + (move) + "px)";
//             displayZombie();
//         }, 200);


//         document.addEventListener("keydown", function(event) {

//             console.log(event.key);
//             if (event.key === "ArrowRight") {
//                 directRight -= posRight ;
//                 zombie.style.transform = "rotateY(180deg) translateX(" + (directRight) + "px)";
//             }
//             if(event.key === "ArrowLeft"){
//                 posRight = -1 ;
//                 zombie.style.transform = "rotateY(0deg) translateX(" + (directRight) + "px)";
//             }

//             if (event.key === "ArrowDown") {
//                 directY++
//                 zombie.style.transform = "translateY(" + (directY) + "px)";
//             }else if(event.key === "ArrowUp"){
//                 directY -=1
//                 zombie.style.transform = "translateY(" + (directY) + "px)";
//             }



//         });
//     }

//     displayZombie();




// });


document.addEventListener("DOMContentLoaded", () => {
    let zombie = document.querySelector("#zombietomb");
    let position = 0;
    let divWidth = zombie.scrollWidth;
    let imageWidth = divWidth * 11;
    let arrowSens = 1;
    let divSpeed = 100;
    let divPos = 0;
    residentEvil();
    function residentEvil() {
        position -= divWidth;
        zombie.style.backgroundPosition = `${position}px`;
        const timeout = setTimeout(() => {
            requestAnimationFrame(residentEvil);
        }, 200);

        if (position === -imageWidth + divWidth) {
            clearTimeout(timeout);
        }
    }

    document.addEventListener("keydown", function (event) {
        console.log(event.key);
        divPos += arrowSens * divSpeed;
        if (event.key === "ArrowRight") {
            arrowSens = 1
            zombie.style.transform = "rotateY(180deg) translate(" + (-divPos) + "px)";
        } else if (event.key === "ArrowLeft") {
            arrowSens = -1;
            zombie.style.transform = "rotateY(0deg) translate(" + (divPos) + "px)";
        }
        if(divPos >= (window.innerWidth - divWidth)){
            zombie.style.transform = "translate(" + (window.innerWidth - divWidth) + "px)" ;
        }
        if(divPos <= 0){
            zombie.style.transform = "translate(" + (0) + "px)" ;
        }

        if (event.key === "ArrowDown") {
            arrowSens = 1
            zombie.style.transform = "translateY(" + (divPos) + "px)";
        } else if (event.key === "ArrowUp") {
            arrowSens = -1
            zombie.style.transform = "translateY(" + (divPos) + "px)";
        }


    });
});
