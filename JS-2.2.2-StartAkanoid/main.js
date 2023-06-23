`use strict`



document.addEventListener("DOMContentLoaded", () => {
    const ball3 = document.getElementById("ball3");
    let body = document.querySelector("html");
    let click = 0;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let ballPoX = 0;
    let ballPoY = 0;
    let ballDirectionX = 0;
    let ballDirectionY = 0;
    let speed = 10;
    let limitRightX = windowWidth - ball3.offsetWidth;
    console.log(limitRightX);
    let limitBottomY = windowHeight - ball3.offsetHeight;
    console.log(limitBottomY);
    let request;

    // window.addEventListener("load", UpdatePosition);

    body.addEventListener("click", () => {
        click++;
        if (click % 2 === 1) {
            animateBall();

        } else {
            cancelAnimationFrame(request);
        }
    })

    function animateBall() {

        ballPoX = ballPoX + ballDirectionX * speed;
        ballPoY = ballPoY + ballDirectionY * speed;

        if (ballPoX >= limitRightX) {
            ballDirectionX = -1;
        } else if (ballPoX <= 0) {
            ballDirectionX = 1;
        }

        if (ballPoY >= limitBottomY) {
            ballDirectionY = -1;

        } else if (ballPoY <= 0) {
            ballDirectionY = 1;
        }

        ball3.style.transform = "translateX(" + (ballPoX) + "px) translateY(" + (ballPoY) + "px)"


        request = requestAnimationFrame(animateBall);

    }

});




