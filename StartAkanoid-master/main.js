'use strict'

document.addEventListener("DOMContentLoaded", function () {  
    const ball = document.getElementById("ball");
    let ballDirectionX = 1;
    let ballDirectionY = 1;
    let ballPosX = 0;
    let ballPosY = 0;
    let speed = 6;

    const windowHeigth = window.innerHeight;
    let limiBottomY = windowHeigth - ball.offsetHeight ;

    const windowWidth = window.innerWidth;
    let limiRightX = windowWidth - ball.offsetWidth

    function animateBall() {
        ballPosX += ballDirectionX * speed;
        ballPosY += ballDirectionY * speed;

        if (ballPosX >= limiRightX || ballPosX <= 0) {
            ballDirectionX *= -1
        }

        if (ballPosY >= limiBottomY || ballPosY <= 0) {
            ballDirectionY *= -1;
                
        }

        ball.style.transform = ` translateX(${ballPosX}px)translateY(${ballPosY}px) `;
        requestAnimationFrame(animateBall);
    }
    animateBall();


    
})
