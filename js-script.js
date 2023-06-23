'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const ball1 = document.querySelector("#ball1");
    const ball2 = document.querySelector("#ball2");
    const ball3 = document.querySelector("#ball3");
    
    let position = {
        ball1: 0,
        ball2: 0,
        ball3: 0,
    };
    const updateSpeed = 1000 / 200;
    const windowsWidth = window.innerWidth;
    // console.log(windowsWidth);
    moveWithSetTimeout();
    moveWithRqfr();
    setInterval(moveWithSetInterval, updateSpeed);
    // console.dir(ball2.scrollWidth);
    function moveWithSetTimeout() {
        position.ball1++;
        if (position.ball1 > (windowsWidth - getFullWidth(ball1))){
            position.ball1 = -ball1.scrollWidth;
        };
        ball1.style.transform = "translateX(" + position.ball1 + "px)";
        setTimeout(moveWithSetTimeout, updateSpeed);
    };
    
    function moveWithSetInterval(){
        position.ball2++;
        if (position.ball2 > (windowsWidth - getFullWidth(ball2))){
            position.ball2 = -ball2.scrollWidth;
        };
        ball2.style.transform = "translateX(" + position.ball2 + "px)";
    };

    function moveWithRqfr(){
        position.ball3++;
        if (position.ball3 > (windowsWidth - getFullWidth(ball3))){
            position.ball3 = -ball3.scrollWidth;
        };
        ball3.style.transform = "translateX(" + position.ball3 + "px)";
        requestAnimationFrame(moveWithRqfr);
    };


    function getFullWidth(element){
        const styles = window.getComputedStyle(element);

        const width = element.offsetWidth;
        console.log(width);
        const borderLeftWidth = parseFloat(styles.borderLeftWidth);
        const borderRightWidth = parseFloat(styles.borderRightWidth);
        const paddingLeft = parseFloat(styles.paddingLeft);
        const paddingRight = parseFloat(styles.paddingRight);

        const fullwidth = width + borderLeftWidth + borderRightWidth + paddingLeft + paddingRight;

        return fullwidth;
    }

});