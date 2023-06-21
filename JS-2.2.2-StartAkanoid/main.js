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

    let timeOut;
    let spanCentU = document.getElementById("centU");
    let spanCentD = document.getElementById("centD");
    let spanSecU = document.getElementById("secU");
    let spanSecD = document.getElementById("secD");
    let spanMinU = document.getElementById("minU");
    let spanMinD = document.getElementById("minD");
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
            }, 10);
            console.log(timeOut);
            if (compteurCentU > 9) {
                compteurCentU = 0;
                spanCentU.innerHTML = compteurCentU;
                spanCentD.innerHTML = compteurCentD++;
            }
            if (compteurCentD > 10) {
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

        spanCentU.innerHTML = compteurCentU++;
        spanCentD.innerHTML = compteurCentD++;
        spanSecU.innerHTML = compteurSecU++;
        spanSecD.innerHTML = compteurSecD++;
        spanMinU.innerHTML = compteurMinU++;
        spanMinD.innerHTML = compteurMinD++;
    })

});