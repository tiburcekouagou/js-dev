'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const chrono = document.getElementById('chrono');
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const restart = document.getElementById("restart");
    let counter = 0
    
    start.addEventListener("click", function () {
        setTimeout(() => {
            counter++;
            chrono.innerHTML = counter;
        }, 1000);
    })
    
    

})
