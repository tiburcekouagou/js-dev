'use strict'
document.addEventListener("DOMContentLoaded", function () {
    function getFullWidth(element) {
        // Récupérer les propriétés calculés de l'élément
        const styles = window.getComputedStyle(element);

        // Récupéérer la largeur, la bordure et le paddinge de l'élément
        const width = element.offsetWidth; // element.scrollWidth
        const borderLeftWidth = parseFloat(styles.borderLeftWidth)
        const borderRightWidth = parseFloat(styles.borderRightWidth);
        const paddingLeft = parseFloat(styles.paddingLeft);
        const paddingRight = parseFloat(styles.paddingRight);

        // Calculer la largeur totale incluant les bordures et les padding
        const fullWidth = width + borderLeftWidth + borderRightWidth + paddingLeft + paddingRight;

        // console.log(styles);
        return fullWidth;
    }
    const ball3 = document.querySelector("#ball3")
    let widthWin = window.innerWidth;
    let heigthWin = window.innerHeight;
    let degre = 45;
    let position = 0;
    let positionY = 0;
    let clickCount = 0;
    let sens = 1;
    let sensY = 1;
    let raf;
    const updateSpeed = 1;



    
    let random = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min );



    let body = document.querySelector("body");
    body.addEventListener("click", function () {
        if (clickCount % 2 === 0) {
            let moveWithRAF = () => {
                position += 15 * sens ;
                positionY+= 15 * sensY;
                if (positionY <= 0 || positionY >= (heigthWin - getFullWidth(ball3)) ) {
                    sensY *= -1;
                    body.style.backgroundColor = "rgb(" +  random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
                } 
                else if ( position <= 0 || position >= (widthWin - getFullWidth(ball3))) {
                     sens *= -1;
                     body.style.backgroundColor = "rgb(" +  random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
                }
                ball3.style.transform = "translate(" + position + "px," + positionY + "px)";
                raf = requestAnimationFrame(moveWithRAF);
            }
            moveWithRAF();
        } else{
            cancelAnimationFrame(raf);
        }
        clickCount++
    });
    console.log(heigthWin);
    console.log(random(255));
});