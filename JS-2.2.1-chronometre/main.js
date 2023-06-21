'use strict'
document.addEventListener("DOMContentLoaded", function () {
    let secondes = 0;
    let min = 0;
    let cent = 0
    let heure = 0;
    let intervalId;
    let intervalIdCent;
    let result = document.getElementById("chrono");
    let start = document.getElementById("start");
    start.addEventListener("click", function () {

        function timer() {
           intervalId = setTimeout(() => {
                cent++;
                timer();
                if (cent >= 60) {
                    cent = 0;
                    secondes++;
                    if (secondes >= 60) {
                        secondes = 0;
                        min++
                        if (min >= 60) {
                            min = 0;
                            heure++
                            if (heure > 23) {
                                heure = 0;
                            }
                        }
                    }
                }
                if (heure <= 9) {
                    heure = "0"+ heure
                }
                if (min <= 9) {
                   min = "0"+ min
                }
                if (secondes <= 9) {
                    secondes = "0" + secondes
                }
                result.innerText = heure + " : " + min + " : "+ secondes + " : " + cent;
            }, 1);
        }
        timer();
    });
    
    let end = document.getElementById("stop");
    end.addEventListener("click", function () {
        clearTimeout(intervalId);
    });
    let reset = document.getElementById("reset");
    reset.addEventListener("click", function () {
        secondes = 0;
        min = 0;
        cent = 0;
    });
});                       
