'use strict'

document.addEventListener("DOMContentLoaded", function () {

    const chrono = document.getElementById("chrono");
    const start = document.getElementById("start");
    const reset = document.getElementById("reset");
    const seconde = document.getElementById("seconde");
    const minute = document.getElementById("minute");

    let time;
    let secnd = 0;
    let secnd0 = 0;
    let centieme = 0;
    let centieme0 = 0;
    let minte = 0;
    let minte0 = 0;
    

    start.addEventListener("click", function () {
        function timeout() {
            minute.innerHTML = minte0 + "" + minte + " m";
            seconde.innerHTML = ":" + secnd0 + "" + secnd + " s";
            chrono.innerHTML = ":" + centieme0 + "" + centieme + " c";
            console.log(minte0 + minte)

            time = setTimeout(function () {
                centieme++;
                
                if (centieme === 10) {
                    centieme = 0;
                    secnd++;
                    chrono.innerHTML = " : " + centieme0 + "" + centieme;
                }

                if (secnd === 10) {
                    secnd = 0;
                    secnd0++;
                    seconde.innerHTML = secnd0 + "" + secnd;
                }
    
                if (secnd0 === 6) {
                    secnd0 = 0;
                    minte++;
                }

                if (minte === 10) {
                    minte = 0;
                    minte0++;
                }

                if (minte0 === 6) {
                    minte0 = 0;
                    seconde.innerHTML = minte0 + "" + minte;
                }

                timeout();
            }, 10)

            
        }
        timeout();
    })
})
