'use strict'

document.addEventListener("DOMContentLoaded", function () {

    /* Récupération des paramètres*/ 
    let chronoShower = document.getElementById("chrono");
    let minutes = document.getElementById("minutes");
    let centieme = document.getElementById("centieme-seconde");

    /*Initialisation des counter*/ 
    let centiemeCounter = 0;
    let secondeCounter = 0;
    let minuteCounter = 0;
    let timeOutId; // Variable d'id du Timeout

    /*Récupération des boutton*/ 
    let startButton = document.getElementById("start");
    let resetButton = document.getElementById("reset");
    let clickCounter = 0;

    function setTimeoutCallback() {
        if (centiemeCounter < 10) {

            setTimeout(function () {
            centieme.innerHTML = centiemeCounter;
            // console.log(centiemeCounter);
            centiemeCounter++

            setTimeoutCallback();
            }, 100);

        }else if (centiemeCounter === 10) {
            centiemeCounter = 0;
            setTimeoutCallback();
            secondeCounter++
            chronoShower.innerHTML = secondeCounter;

            if (secondeCounter === 59) {
                secondeCounter = 0;
                minuteCounter++;
                minutes.innerHTML = minuteCounter;
            }
        }
    }

    /*Button Start - Ajout de l'évènement clique*/ 
    startButton.addEventListener("click", function (event) {
        event.preventDefault();
        clickCounter++;
        console.log(clickCounter);

        if (clickCounter === 1) {
            timeOutId = setTimeout(function () {
                setTimeoutCallback();
            }, 100);
        }else if (clickCounter === 2) {
            clearTimeout(timeOutId);
            clickCounter = 0;
        }

    });

    /*Button Reset - Ajout de l'évènement clique*/
    resetButton.addEventListener("click", function () {
        chronoShower.innerHTML = "00";
        minutes.innerHTML = "00";
        centieme.innerHTML = "00";
        centiemeCounter = 0;
        secondeCounter = 0;
        minuteCounter = 0;
        clearTimeout(timeOutId);
    });
    
});