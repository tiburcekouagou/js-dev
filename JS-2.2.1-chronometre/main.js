'use strict'
'use strict'
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let chrono = document.getElementById("chrono");

let timeoutId;
let intervalId;
let dec = 0;
let sec = 0;
let min = 0;
let heu = 0;

chrono.textContent = heu + ' : ' + min + ' : ' + sec + ' . ' + dec;

b3.addEventListener('click', timer);
b4.addEventListener('click', stopTimer);


function timer() {
    intervalId = setInterval(function () {
        chrono.textContent = heu + ' : ' + min + ' : ' + sec + ' : ' + dec;
        dec += 1;
        if(dec >= 10){dec = 0; sec += 1;}
        if(sec >= 60){sec = 0; min += 1;}
        if(min >= 60){min = 0; heu += 1;}

    }, 100)
}

function stopTimer() {
    clearInterval(intervalId);
}