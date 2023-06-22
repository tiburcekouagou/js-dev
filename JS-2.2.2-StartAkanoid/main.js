'use strict'

document.addEventListener("DOMContentLoaded", () =>{
    let ball = document.querySelector("#ball");
    let body = document.querySelector("body")
    let position = 0;
    let increment = 1;
    let numberOfClicks = 0;
    let angle = 0;
    let ballWidth = ball.offsetWidth;
    let ballHeight = ball.offsetHeight
    let balllimitW = window.innerWidth - ballWidth
    let balllimitH = window.innerHeight - ballHeight
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

        angle = 45;
        position = position + increment * 20;
        
        // if (position >= window.innerWidth - ballWidth){

        //     position = window.innerWidth - ballWidth
        //     increment = -1
           
        // } else if( position <= 0){

        //     position = 0;
        //     increment = 1

        // }
            if (position >= window.innerHeight){

                angle = 90;

            }
       
            if(position >= balllimitW || position <= 0) {

                increment *= -1;

            }

        console.log(angle)
        ball.style.transform = `rotate(${angle}deg) translate( ${position} px)`;
        requestAnimationID = requestAnimationFrame(bounce)

    }

    })



    