'use strict'
document.addEventListener("DOMContentLoaded", function () {
    let doubl = temps => temps = (temps <= 9) ? temps = "0" + temps : temps = temps;
    let chrono = {secondes: 0, min: 0, cent: 0, hours: 0}
    let intervalId;
    let result = document.getElementById("chrono");
    let start = document.getElementById("start");
    start.addEventListener("click", function () {

        function timer() {
            intervalId = setTimeout(() => {
                chrono.cent++;
                timer();
                if (chrono.cent > 99) {
                    chrono.cent = 0;
                    chrono.secondes++;
                }
                else if (chrono.secondes > 59) {
                    chrono.secondes = 0;
                    chrono.min++;
                }
                else if(chrono.min > 59) {
                    chrono.min = 0;
                    chrono.hours++;
                }


                result.innerText = doubl(chrono.hours) + " : " + doubl(chrono.min) + " : " + doubl(chrono.secondes) + " : " + doubl(chrono.cent);

            }, 10);
        }
        timer();
        start.style.display = "none";
        end.style.display = "block";
        result.style.animation = "boom 1s infinite"
    });

    let reset = document.getElementById("reset");
    reset.addEventListener("click", function () {
        result.innerText = "00 : 00 : 00 : 00";
        chrono.min = 0;
        chrono.secondes = 0;
        chrono.hours = 0;
        chrono.cent = 0;
        clearTimeout(intervalId);
        end.style.display = "none";
        result.style.animation = "boom 0s infinite"
        start.style.display = "block";
    });
    let end = document.getElementById("stop");
    end.addEventListener("click", function () {
        clearTimeout(intervalId);
        end.style.display = "none";
        start.style.display = "block";
        result.style.animation = "boom 0s infinite"
    });
});                     