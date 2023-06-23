'use strict'



document.addEventListener("DOMContentLoaded", function(){
    // debugger;
    const ball = document.getElementById("ball");
    console.log(ball);
    let positionX = 0;
    let directionX = 1;
    let speed = 10;
    let limitX = window.innerWidth;
    console.log(limitX);


    let positionY = 0;
    let directionY = 1;
    let limitY = window.innerHeight;
    console.log(limitY);




    animationX();
    // animationY();

    function animationX(){
        if(positionX > limitX - ball.offsetWidth || positionX < 0){
            // positionX = limitX - ball.offsetWidth;
            directionX *= -1;
            ball.style.backgroundColor = `rgb(${randomNumber},${randomNumber},${randomNumber})`;
        };
        if(positionY > limitY - ball.offsetHeight || positionY < 0){
            directionY *= -1;
            ball.style.backgroundColor = `rgb(${randomNumber},${randomNumber},${randomNumber})`;
        };
        positionX = positionX + directionX * speed;
        positionY = positionY + directionY * speed;

        ball.style.transform = "translateX(" + (positionX) + "px) translateY(" + (positionY) + "px)";
        requestAnimationFrame(animationX);
        
    };

    function randomNumber(){
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // function animationY(){
    //     if(positionY > limitY - ball.offsetHeight || positionY < 0){
    //         directionY *= -1;
    //     };
    //     positionY = positionY + directionY * speed;
    //     ball.style.transform = "translateY(" + (positionY) + "px)";
    //     requestAnimationFrame(animationY);
    // };
    
});




/*
- déclarez une variable "ball" qui représente la balle dans le html

- initialisez une variable "ballDirectionX" à 1. Cette dernière represente la direction initiale de la balle(1 à droite , -1 à gauche)

- initiallisez une variable "ballPosX" à 0 Elle represente la position initiale de la balle sur l'axe X

- initialisez une variable "speed" à 6 Elle represente la vitesse de la balle plus cette valeur sera élévée, plus la balle se déplacera
    rapidement

- déclarez une variable "limitRightX" Elle représente la largeur du navigateur et donc la limite à droite de l'écran

- créez une fonction "animateBall". c'est elle qui se chargera de déplacer le balle.
    - modifiez la position de la balle en y ajoutant 1 ou en soustrayant 1 selon la direction
    - modifiez le style de l'objet DOM
    - si la balle atteint les limites droite ou gauche de l'ecran on multiplie par -1 la direction pour l'inverser
    - appeler cette fonction au prochain rafraichissement

- déclarer un évenement "DOMContentLoaded"
- à l'intérieur, on récupère la balle
- on récupère la lilmite à droite de l'écran(taille de l'écran moins la largeur de la balle)
- appeler la fonction "anumateBall"
*/