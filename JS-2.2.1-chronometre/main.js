'use strict'
document.addEventListener("DOMContentLoaded",function(){

    let bouttonStart = document.getElementById("start");
    let bouttonStop = document.getElementById("stop");
    let bouttonReset = document.getElementById("Reset");
    let counter = 0 ;
    
    bouttonStart.addEventListener("click", function () {
            intervalId = setInterval(function () {
                counter++;
                console.log(counter);
            
        console.log(bouttonStart);
    });

    bouttonStop.addEventListener("click", function () {

        console.log(bouttonStop);
    });

    bouttonReset.addEventListener("click", function () {
        console.log(bouttonReset);
        clearTimeout ;
        // counter = 0 ;
    });

     ;

 
});