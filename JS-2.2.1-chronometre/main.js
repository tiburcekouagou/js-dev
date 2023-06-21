'use strict'

'use strict'
// Il faudra créer donc quatre différentes fonctions pour gérer le chronomètre

document.addEventListener("DOMContentLoaded", () => {

    // Déclaration globale des variables
    // Les variables pour les boutons
    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");
    // Les variables relatives au chronomètre
    let ms = document.getElementById("millisecond");
    let maSeconde = document.getElementById("seconds");
    let min = document.getElementById("minute");
    let milliCounter = 0;
    let secondCounter = 0;
    let minuteCounter = 0;
    let timeout;
    let click = 0;
    
    // LES FONCTIONS DECLAREES 
    //-----------------Fonction de démarrage-------------------------
    const start = () => {
        mSecond();
    }

    //-----------------Fonction de vérification-------------------------

    function mSecond() {
        milliCounter++;
        
        if (milliCounter === 100) {
            secondCounter++;
            milliCounter = 0;
        }
        if (secondCounter === 60) {
            minuteCounter++;
            secondCounter = 0;
        }
        if (milliCounter < 10) {
            ms.innerText = "0" + milliCounter;
        } else {
            ms.innerText = milliCounter;
        }
        if (secondCounter < 10) {
            maSeconde.innerText = "0" + secondCounter + ":";
        } else {
            maSeconde.innerText = secondCounter + ":";
        }
        if (minuteCounter < 10) {
            min.innerText = "0" + minuteCounter + ":";
        } else {
            min.innerText = minuteCounter + ":";
        }
        timeout = setTimeout(mSecond, 10);
    }


    //-----------------Fonction de reset-------------------------
    const reset = () => {
        ms.innerText = "00";
        maSeconde.innerText = "00 :";
        min.innerText = "00 :";
        startBtn.innerText = "Start"
        milliCounter = 0;
        secondCounter = 0;
        minuteCounter = 0;
        clearTimeout(timeout);
        startBtn.style.display = "block"
        stopBtn.style.display = "none"

    }

    //-----------------Fonction de pause-------------------------
    const stop = () => {
        clearTimeout(timeout);
        startBtn.innerText = "Start";
        startBtn.style.display = "block"
        stopBtn.style.display = "none"
    }

    //-----------------Les actions effectuées-------------------------
    startBtn.addEventListener("click", () => {
        if (startBtn.innerText === "Start") {
            start();
            startBtn.innerText = "Stop";
            startBtn.style.display = "none"
            stopBtn.style.display = "block"
        }

    });

    resetBtn.addEventListener("click", reset);
    stopBtn.addEventListener("click", stop);






});
