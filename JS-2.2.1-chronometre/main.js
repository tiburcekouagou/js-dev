// 'use strict'
document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("start");
    let stopButton = document.getElementById("stop");
    let chronome = document.getElementById("chrono");
    let seconde = document.getElementById("seconde");
    let minu = document.getElementById("minute");

    let counter = 0;
    let secondes = 0;
    let minutes = 0


    startButton.addEventListener("click", function () {
        function time() {
            setTimeout(function () {
                counter++;
                chronome.innerHTML = counter;
                time();
            }, 100)

            if (counter === 9) {
                counter = 0;
                secondes++;
                seconde.innerHTML = secondes;
            };

             if (secondes === 59) {
                secondes = 0;
                minutes++;
                minu.innerHTML = minutes
            }

        }
        time();
    })




})
