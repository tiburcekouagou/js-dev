'use strict'

// écouteurs d'évènements global
document.addEventListener("DOMContentLoaded", function () {

    const chrono = document.getElementById("chrono");
    const reset = document.getElementById('Reset');
    const stop = document.getElementById('Stop');
    const start = document.getElementById('Start');


    let millisecondes = 0; 
    let secondes = 0;
    let minutes = 0; 
    let heures = 0;
    let stops = true;

    // La fonction chronomètre permettant de faire marcher le comptage
    function chronomètre() {

        millisecondes++;
        if (millisecondes == 90) {
            secondes++;
            millisecondes = 0;
        }
        if (secondes == 60) {
            minutes++;
            secondes = 0;
        }
        if (minutes == 60) {
            heures++;
            minutes = 0;
        }

        // Affichage du minuteurs

        if (millisecondes < 10) {
            millisecondes = "0" + millisecondes;
        }

        if (secondes < 10) {
            secondes = "0" + secondes;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (heures < 10) {
            heures = "0" + heures;
        }
        chrono.textContent = (`${heures}: ${minutes}: ${secondes}: ${millisecondes}`);
    }

    start.addEventListener("click", function () {
        if (stops) {
            stops = false;
            interval_Id = setInterval(chronomètre, 100);
        }
    });
    
    stop.addEventListener("click", function () {
        if (!stops) {
            stops = true;
            clearInterval(interval_Id);
        }
    });
  
    reset.addEventListener("click", function () {
        chrono.textText = "00&nbsp;H: 00&nbsp;M: 00&nbsp;S: 00&nbsp;MS";
        stops = true;
        millisecondes = 0
        secondes = 0
        minutes = 0
        heures = 0
        clearInterval(interval_Id)
    });
    
});
