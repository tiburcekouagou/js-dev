'use strict'

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let chronoElements = [0, 0, 0, 0];

function startChrono(){

    setTimeout(() => {

        chronoElements[3] = milliseconds;
        
        startChrono();

    }, 10)

    milliseconds++;

    if (milliseconds === 99) {

        milliseconds = 0; 
        seconds++; 
        chronoElements[2] = seconds;
        console.log(chronoElements);
        chrono.innerHTML = chronoElements.join(" : ");

    }

    if (seconds === 59) {

        seconds = 0;
        minutes++;
        chronoElements[1] = minutes;
    }
    
    if (minutes === 59) {

        minutes = 0;
        hours++;
        chronoElements[0] = hours;
    }

    

}

document.addEventListener("DOMContentLoaded", () =>{
    
    let chrono = document.getElementById("chrono") ;
    let startBtn = document.querySelector("#start");
    let endBtn = document.querySelector("#stop");
    
    startBtn.addEventListener("click", () =>{

        startChrono();
        
    })
    
    
})
    

    