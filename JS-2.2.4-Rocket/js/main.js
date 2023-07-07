'use strict';
document.addEventListener("DOMContentLoaded", () => {

    /***********************************************************************************/
    /* *********************************** DONNEES *************************************/
    /***********************************************************************************/
    let billbBoard = document.getElementById("billboard");
    let firingButton = document.getElementById("firing-button");
    let stop = document.getElementById("stop");
    let disabled = document.addEventListener("disabled");
    let launchingRamp = document.getElementById("launching-ramp");
    let rocket = document.getElementById("rocket");
    let rocket2 = document.getElementById("rocket2");
    let rocket3 = document.getElementById("rocket3");
    let rocketTookOff = document.getElementById("rocket.tookOff");
    let star = document.addEventListener("star")

    chrono.textContent = ' : ' + min + ' : ' + sec + ' : ' + dec;
    firingButton.addEventListener('click', timer);
    stop.addEventListener('click', stopTimer);
    let intervalId;
    let timeoutId;
    let min = 0;
    let dec = 0;
    let sec = 0;


    /***********************************************************************************/
    /* ********************************** FONCTIONS ************************************/
    /***********************************************************************************/
    function timer() {
        intervalId = setInterval(function () {
            chrono.textContent = ' : ' + min + ' : ' + sec + ' : ' + dec;
            dec += 1;
            if(dec >= 10){dec = 0; sec += 1;}
            if(min >= 60){min = 0;}
        }, 100)
    }


    /************************************************************************************/
    /* ******************************** CODE PRINCIPAL **********************************/
    /************************************************************************************/



})

