'use strict'
document.addEventListener("DOMContentLoaded", function () {

    // Initialize all my variables
    let showChrono = document.getElementById("chrono");
    let start = document.getElementById("start-btn");
    let pause = document.getElementById("pause-btn");
    let reset = document.getElementById("reset-btn");
    let timeOutId;
    let intervalId;

    let minutes = 0;
    let secondes = 0;
    let tierces = 0;

    function countChrono () {
        tierces++;
        if (tierces >= 100) {
            tierces = 0;
            secondes++;

            if(secondes >= 60) {
                secondes = 0; 
                minutes++;
            }
        }

        showChrono.innerHTML = minutes.toString().padStart(2, "0") + ":" +
                                 secondes.toString().padStart(2, "0") + ":" +
                                 tierces.toString().padStart(2, "0");  
                                 
                                 
        timeOutId = setTimeout(countChrono, 60)
    }

    start.addEventListener('click', function () {
        if(!timeOutId) {
            countChrono();
        }
    });

    pause.addEventListener('click', function () {
       clearTimeout(timeOutId);
       timeOutId = null;
    })

    reset.addEventListener('click', function () {
       clearTimeout(timeOutId);
       timeOutId = null;

       minutes = 0;
       secondes = 0;
       tierces = 0;
       showChrono.innerHTML = "00:00:00";
    })


})

