'use strict'

let tierce = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeoutId = 0;

let toTwoDigits = (num) => {

    let numToStr = num.toString();
     
    if(numToStr.length === 1){

        return "0" + numToStr;

    } else {

        return numToStr;
    }
}

function startChrono(){

    chrono.innerHTML = toTwoDigits(hours) + " : " +  toTwoDigits(minutes) + " : " + toTwoDigits(seconds) + " : " + toTwoDigits(tierce);

    tierce++;

    if (tierce === 60) {

        tierce = 0; 
        seconds++; 

    }

    if (seconds === 59) {

        seconds = 0;
        minutes++;
        
    }
    
    if (minutes === 59) {

        minutes = 0;
        hours++;
        
    }

    timeoutId = setTimeout(() => {

        startChrono();

    }, 100 / 6)

}

function stopChrono() {

    clearInterval(timeoutId)

}

function resetChrono() {

    clearInterval(timeoutId);

    chrono.innerHTML = toTwoDigits(0) + " : " +  toTwoDigits(0) + " : " + toTwoDigits(0) + " : " + toTwoDigits(0);

}


document.addEventListener("DOMContentLoaded", () =>{
    
    let chrono = document.getElementById("chrono") ;
    let startBtn = document.querySelector("#start");
    let endBtn = document.querySelector("#stop");
    let resetBtn = document.querySelector("#reset");
    
    startBtn.addEventListener("click", () =>{

        startChrono();
        
    })
    
    endBtn.addEventListener("click", () =>{

        stopChrono();
        
    })
    
    resetBtn.addEventListener("click", () =>{

        resetChrono();
        
    })
    
    
})
    

    