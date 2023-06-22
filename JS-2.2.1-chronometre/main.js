'use strict'

let chrono = {
    tierce : 0,
    seconds : 0,
    minutes : 0,
    hours : 0
}

let timeoutId = 0;

let formatNumber = (num) => {
     
    return (num < 10) ? "0" + num : num;

}

function updateDisplay(arg){

    chrono.innerHTML = formatNumber(arg)

}

function startChrono(hours, minutes, seconds, tierces){

    chrono.innerHTML = formatNumber(chrono.hours) + " : " +  formatNumber(chrono.minutes) + " : " + formatNumber(chrono.seconds) + " : " + formatNumber(chrono.tierce);

    chrono.tierce++;

    if (chrono.tierce === 60) {

        chrono.tierce = 0; 
        chrono.seconds++; 

    }

    if (chrono.seconds === 59) {

        chrono.seconds = 0;
        chrono.minutes++;
        
    }
    
    if (chrono.minutes === 59) {

        chrono.minutes = 0;
        chrono.hours++;
        
    }

    timeoutId = setTimeout(() => {

        startChrono();

    }, 100 / 6);

}

function stopChrono() {

    clearInterval(timeoutId);

}

function resetChrono() {

    clearInterval(timeoutId);

    chrono.innerHTML = formatNumber(0) + " : " +  formatNumber(0) + " : " + formatNumber(0) + " : " + formatNumber(0);

}


document.addEventListener("DOMContentLoaded", () =>{
    
    let chrono = document.getElementById("chrono") ;
    let startBtn = document.querySelector("#start");
    let endBtn = document.querySelector("#stop");
    let resetBtn = document.querySelector("#reset");
    
    startBtn.addEventListener("click", () =>{

        startBtn.disabled = true;
        endBtn.disabled = false;
        resetBtn.disabled = false;
        startChrono();
        
    })
    
    endBtn.addEventListener("click", () =>{

        startBtn.disabled = false;
        endBtn.disabled = true;
        resetBtn.disabled = false;
        stopChrono();
        
    })
    
    resetBtn.addEventListener("click", () =>{

        startBtn.disabled = false;
        endBtn.disabled = true;
        resetBtn.disabled = true;
        resetChrono();
        
    })
    
    
})
    

    