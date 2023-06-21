'use strict'
document.addEventListener("DOMContentLoaded", function () {
    // compteur centaines
    let compteurCentU = 0;
    let compteurCentD = 1;

    // compteur secondes
    let compteurSecU = 1;
    let compteurSecD = 1;

    // compteur minutes
    let compteurMinU = 1;
    let compteurMinD = 1;

    // compteur heures
    let compteurHeuU = 1;
    let compteurHeuD = 1;

    let timeOut; // fonction

    // compteur centaines
    let spanCentU = document.getElementById("centU");
    let spanCentD = document.getElementById("centD");

    // compteur secondes
    let spanSecU = document.getElementById("secU");
    let spanSecD = document.getElementById("secD");

    // compteur minutes
    let spanMinU = document.getElementById("minU");
    let spanMinD = document.getElementById("minD");

    // compteur heures
    let spanHeuU = document.getElementById("heuU");
    let spanHeuD = document.getElementById("heuD");

    // button start, stop et reset   
    const buttonStart = document.getElementById("start");
    const buttonStop = document.getElementById("stop");
    const buttonReset = document.getElementById("reset");

    buttonStart.addEventListener("click", function () {
        buttonStart.style.display = "none";
        buttonStop.style.display = "block";
        function chrono() {
            timeOut = setTimeout(function () {
                compteurCentU++;
                spanCentU.innerHTML = compteurCentU;
                chrono();
            }, 16.67);
            console.log(timeOut);
            if (compteurCentU > 9) {
                compteurCentU = 0;
                spanCentU.innerHTML = compteurCentU;
                spanCentD.innerHTML = compteurCentD++;
            }
            if (compteurCentD > 6) {
                compteurCentD = 0;
                spanCentD.innerHTML = compteurCentD++;
                spanSecU.innerHTML = compteurSecU++;
            }
            if (compteurSecU > 10) {
                compteurSecU = 0;
                spanSecU.innerHTML = compteurSecU++;
                spanSecD.innerHTML = compteurSecD++;
            }
            if (compteurSecD > 6) {
                compteurSecD = 0;
                spanSecD.innerHTML = compteurSecD++;
                spanMinU.innerHTML = compteurMinU++;
            }
            if (compteurMinU > 10) {
                compteurMinU = 0;
                spanMinU.innerHTML = compteurMinU++;
                spanMinD.innerHTML = compteurMinD++;
            }
            if (compteurMinD > 6) {
                compteurMinD = 0;
                spanMinD.innerHTML = compteurMinD++;
                spanHeuU.innerHTML = compteurHeuU++;
            }
            if (compteurHeuU > 10) {
                compteurHeuU = 0;
                spanHeuU.innerHTML = compteurHeuU++;
                spanHeuD.innerHTML = compteurHeuD++;
            }
        };

        chrono();
    });
    buttonStop.addEventListener("click", function () {
        clearTimeout(timeOut);
        buttonStart.style.display = "block"
        buttonStop.style.display = "none"
    })
    buttonReset.addEventListener("click", function () {

        // compteur centaines
        compteurCentU = 0;
        compteurCentD = 0;

        // compteur secondes
        compteurSecU = 0;
        compteurSecD = 0;

        // compteur minutes
        compteurMinU = 0;
        compteurMinD = 0;

        // compteur heures
        compteurHeuU = 0;
        compteurHeuD = 0;
        
        spanCentU.innerHTML = compteurCentU++;
        spanCentD.innerHTML = compteurCentD++;

        spanSecU.innerHTML = compteurSecU++;
        spanSecD.innerHTML = compteurSecD++;

        spanMinU.innerHTML = compteurMinU++;
        spanMinD.innerHTML = compteurMinD++;

        spanHeuU.innerHTML = compteurHeuU++;
        spanHeuD.innerHTML = compteurHeuD++;
    })

});