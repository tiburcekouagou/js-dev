'use strict'

document.addEventListener("DOMContentLoaded", () =>{
    let ball = document.querySelector("#ball");
    let body = document.querySelector("body")
    let positionX = 0;
    let positionY = 0;
    let incrementX = 1;
    let incrementY = 1;
    let numberOfClicks = 0;
    let angle = 0;
    let ballWidth = ball.offsetWidth;
    let ballHeight = ball.offsetHeight
    let balllimitW = window.innerWidth - ballWidth
    let balllimitH = window.innerHeight - 100
    let requestAnimationID;
    
    body.addEventListener("click", () =>{

        numberOfClicks++;

        if( numberOfClicks % 2 === 0){

            bounce();
    
        } else if(numberOfClicks % 2 === 1){
        
            window.cancelAnimationFrame(requestAnimationID);
    
        }
        
        console.log(numberOfClicks)
        
    });

    bounce();

    function bounce(){

        positionX = positionX + incrementX * 20;
        positionY = positionY + incrementY * 20;
        
            if(positionX >= balllimitW || positionX <= 0) {

                incrementX *= -1;

            }

            if(positionY >= balllimitH || positionY <= 0) {

                incrementY *= -1;

            }
    

        ball.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`;
        requestAnimationID = requestAnimationFrame(bounce)

    }

    })



    // if (positionX >= window.innerWidth - ballWidth){

        //     positionX = window.innerWidth - ballWidth
        //     increment = -1
           
        // } else if( positionX <= 0){

        //     positionX = 0;
        //     increment = 1

        // }