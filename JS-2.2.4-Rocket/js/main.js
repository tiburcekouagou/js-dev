'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

let firingButton = document.querySelector("#firing-button");
let billBoard = document.querySelector("#billboard > span");
let rocket = document.querySelector("#rocket");
let main = document.querySelector("main");
let seconds = 10;
let intervalId;
let randomedIndex;
let randomedLeftPosition;
let randomedTopPosition;
let stopButton;
let resetButton;



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function startChrono(btn){

    seconds--;
    billBoard.innerHTML = "0" + seconds; 

    if(seconds === 0){

        btn.classList.add("disabled");
        clearInterval(intervalId);
        rocket.src = "images/rocket3.gif";
        rocket.classList.add("tookOff");
        // resetButton.classList.add("disabled");

        
    } else if(seconds < 10){

        rocket.src = "images/rocket2.gif";

    } 

}

function stopChrono(btn1, btn2, id){

    btn1.classList.remove("disabled");
    btn2.classList.add("disabled");
    clearInterval(id);

    if(seconds === 0){

        btn2.classList.add("disabled");

    }

}

function resetChrono(btn1, btn2, id){

    btn1.classList.remove("disabled");
    btn2.classList.add("disabled");
    clearInterval(id);
    seconds = 10;
    billBoard.innerHTML = "";
    rocket.src = "images/rocket1.png";
    rocket.classList.remove("tookOff");

}

function createStars(){

    let starSizes = ["tiny","normal", "big"];
    let stars;
    let lastAddedStar;
    
    for (let i = 0; i < 150; i++){
        
        let star = document.createElement("div");
        star.classList.add("star");
        randomedLeftPosition = Math.floor(Math.random() * 100);
        randomedTopPosition = Math.floor(Math.random() * 100);
        randomedIndex = Math.floor(Math.random() * 3);
        
        main.append(star);
        stars = document.querySelectorAll(".star");
        lastAddedStar = stars[stars.length - 1];
        lastAddedStar.classList.add(starSizes[randomedIndex]);
        lastAddedStar.style.left = `${randomedLeftPosition}%`;
        lastAddedStar.style.top = `${randomedTopPosition}%`;

    }

}



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener("DOMContentLoaded", () =>{

    firingButton.style.left = "50px";

    /**
     * Création du bouton Reset
     */

    resetButton = document.createElement("img");
    resetButton.id = "reset-button";
    resetButton.src = "images/cancel-button.png";
    resetButton.alt = "Reset button"; 

    main.append(resetButton);

    resetButton.style.position = "absolute";
    resetButton.style.left = "290px";
    resetButton.style.bottom = "100px";
    resetButton.style.width = "75px";
    resetButton.style.height = "75px";
    resetButton.style.cursor = "pointer";



    /**
     * Création du bouton Pause
     */

    let stopButton = document.createElement("span");
    stopButton.id = "cancel-button";
    stopButton.classList.add("fas","fa-pause");
    stopButton.alt = "Canceling button"; 

    main.append(stopButton);

    stopButton.style.position = "absolute";
    stopButton.style.left = "170px";
    stopButton.style.bottom = "100px";
    stopButton.style.fontSize = "47px"
    stopButton.style.cursor = "pointer";
    stopButton.style.color = "#fff";
    stopButton.style.backgroundColor = "#3aaa35";
    stopButton.style.border = "5px solid #d0d2d3";
    stopButton.style.borderRadius = "50%"
    stopButton.style.paddingInline = "20px"
    stopButton.style.paddingBlock = "10px"
    
   
    // Création du bouton de remise à zéro du décollage
    /** Création des étoiles */
    createStars();

    /* Au clic du bouton de démarrage */
    firingButton.addEventListener("click", () =>{

        resetButton.classList.remove("disabled");
        firingButton.classList.add("disabled");
        stopButton.classList.remove("disabled");
        intervalId = setInterval(() =>{

            startChrono(stopButton);

        }, 1000)

    })

    // Au clic du bouton de pause
    stopButton.addEventListener("click", () =>{

        resetButton.classList.remove("disabled");
        stopChrono(firingButton, stopButton, intervalId);

    })

    // Au clic du bouton d'annulation
    resetButton.addEventListener("click", () =>{

        resetButton.classList.add("disabled");
        resetChrono(firingButton, stopButton, intervalId);

    })


    
}) 