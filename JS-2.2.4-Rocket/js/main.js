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



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function startChrono(){

    seconds--;
    billBoard.innerHTML = "0" + seconds; 

    if(seconds === 0){

        clearInterval(intervalId);
        rocket.src = "images/rocket3.gif";
        rocket.classList.add("tookOff");
        

    } else if(seconds < 10){

        rocket.src = "images/rocket2.gif";

    } 

}


function createStars(){

    let star = "<div class='star'></div>";
    let starSizes = ["tiny","normal", "big"];
    let stars;
    let lastAddedStar;
    
    for (let i = 0; i < 150; i++){
        
        randomedLeftPosition = Math.floor(Math.random() * 100);
        randomedTopPosition = Math.floor(Math.random() * 100);
        randomedIndex = Math.floor(Math.random() * 3);
        
        main.innerHTML += star;
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

    let stopButton = "<img id='cancel-button' src='images/cancel-button.png' alt='Canceling button'>";

    main.innerHTML += stopButton;

    let cancelButtonEl = document.getElementById("cancel-button");
    console.log(cancelButtonEl)
    cancelButtonEl.style.position = "absolute";
    cancelButtonEl.style.left = "250px";
    cancelButtonEl.style.bottom = "100px";
    cancelButtonEl.style.width = "75px";
    cancelButtonEl.style.height = "75px";
    cancelButtonEl.style.cursor = "pointer";
   
    createStars();

    firingButton.addEventListener("click", () =>{

        firingButton.classList.add("disabled");
        intervalId = setInterval(() =>{

            startChrono();

        }, 1000)

    })

    
}) 