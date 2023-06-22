'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const ball1 = document.querySelector("#ball1")
    const ball2 = document.querySelector("#ball2")
    const ball3 = document.querySelector("#ball3")
    let widthWin = window.innerWidth;
    // ball1.style.transform = "translateX(" + (widthWin - ball1.scrollWidth) + "px)"
    const updateSpeed = 1000/1000;
    let position = {
        ball1 : 0, 
        ball2 : 0, 
        ball3 : 0 
    }
    function getFullWidth(element) {
        // Récupérer les propriétés calculés de l'élément
        const styles = window.getComputedStyle(element);

        // Récupéérer la largeur, la bordure et le paddinge de l'élément
        const width = element.offsetWidth; // elemnt.scrollWidth
        const borderLeftWidth = parseFloat(styles.borderLeftWidth)
        const borderRightWidth = parseFloat(styles.borderRightWidth);
        const paddingLeft = parseFloat(styles.paddingLeft);
        const paddingRight = parseFloat(styles.paddingRight);

        // Calculer la largeur totale incluant les bordures et les padding
        const fullWidth = width + borderLeftWidth + borderRightWidth + paddingLeft + paddingRight;

        console.log(styles);
        return fullWidth;
    }
    function moveWithsetTimeout() {
           position.ball1++;
        if (position.ball1 >= (widthWin - getFullWidth(ball1))) {
            position.ball1 = 0;
        }
        ball1.style.transform = "translateX(" + position.ball1 + "px)";
        setTimeout(moveWithsetTimeout,updateSpeed);
    }
    function moveWithsetInterval() {
            position.ball2++;
        if (position.ball2 >= (widthWin - getFullWidth(ball1))) {
            position.ball2 = 0;
        }
        ball2.style.transform = "translateX(" + position.ball2 + "px)";
    }
    // function moveWithsetTimeout() {
        
    // }
    moveWithsetTimeout();
    setInterval(moveWithsetInterval, updateSpeed);
});