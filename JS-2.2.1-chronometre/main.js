'use strict'

let chrono = {
    tierce: 0,
    second: 0,
    minute: 0,
};

let chronoDom;
let timerId;

document.addEventListener("DOMContentLoaded", function(){


    chronoDom = document.querySelector("#chrono"); 

    let startButton =  document.querySelector("#start")
    let stopButton =  document.querySelector("#stop");
    stopButton.disabled = true;
    let resetButton =  document.querySelector("#reset")

    // let tierce = 0;
    // let second = 0;
    // let minute = 0;

    
    // chrono.minute = document.getElementById("minute");
    // console.log(chrono.minute);

    // chrono.second = document.getElementById("second");
    // console.log(chrono.second);

    // chrono.tierce = document.getElementById("tierce");
    // console.log(chrono.tierce);

    updateDisplay();

    startButton.addEventListener("click", function(){
        startButton.disabled = true;
        stopButton.disabled = false;
        timerId = setTimeout(updateChrono, 1000 / 60);
    });

    stopButton.addEventListener("click", function(){
        clearTimeout(timerId);
        startButton.disabled = false;
        stopButton.disabled = true;
    });
});   
/*
Déclarer des variables pour les tiercs, minutes et secondes
Récupérer les élémenrs de déclenchement et d'arrêt
Récupérer l'éléments html où afficher le chronomètre


au click du boutton start, le chronomètres commence par compter(setTimeout)
    - la tierce compte de 0 à 59 puis
    - la seconde s'incrémente de 1. quand elle atteint 59,
    - la minute s'incrémente de 1 et la seconde retoune à 00
au click du boutton stop, le chronomètre s'arrête(clearTimeout)



*/
// setInterval(() => {
//         console.log(++count);
//     }, 1000);

//     setTimeout(increment , 1000);

//     function increment(){
//         console.log(++count);
//         setTimeout(increment, 1000);
// }



function updateChrono (){
    if(chrono.tierce < 59){
        chrono.tierce++;
    }else if(chrono.second < 59){
        chrono.tierce = 0;
        chrono.second++;
    }else{
        chrono.second = 0;
        chrono.minute++
    }
    updateDisplay();
    timerId = setTimeout(updateChrono, 1000/60);
};

function updateDisplay (){
    chronoDom.innerText = chrono.minute + " mn : " + chrono.second + " s : " + chrono.tierce + " ms : "
};


