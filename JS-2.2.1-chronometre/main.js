'use strict'
'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const buttonStart = document.getElementById("start");
    // const buttonStop = document.getElementById("stop");
    const button_reset = document.getElementById("reset");
    let sentance = document.querySelector("chrono")


    let minute = 0;
    let comptMinute;

    let scde = 0;
    let comptScde

    let mllscde = 0;
    let comptMillscde



    buttonStart.addEventListener("click", function () {


        comptMillscde = setInterval(() => {
            mllscde++
            if (mllscde >= 10) {
                mllscde = 0;
                scde += 1;
            }
            if (scde >= 60) {
                scde = 0; 
                minute += 1;
            }
            if (minute >= 60) { minute = 0; }
            chrono.innerText = minute + " : " + scde + " : " + mllscde;
        }, 100);
        // chrono.innerText = comptMillscde
    })
});