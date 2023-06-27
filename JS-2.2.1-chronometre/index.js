'use strict'

// *declarer une variable "ballDirectionX" à 1.
// cette dernière représente la direction initial de la ball. (1 à droite, -1 à gauche)

// *initialiser une variable "ballPosX" à 0 . Elle représente 
// la vitesse de la balle . plus cette valeur sera élévée , plus la balle se déplacera rapidement 

// *déclarez une variable 'limiRightX'. Elle représente la largeur de navigator et donc la limite à droite de l'ecran
// *declarez une fonction "animateBall" .C'est elle qui se chargera de déplacer la ball 
//     -modifier la position de la balle en y ajoutant 1 ou en soustrayant 1 selon la direction
//     -modifier le style de l'objet DOM
//     -si la balle atteint les limites droite OU gauche de l'écran - on multiplie par -1 la direction pour l'inverse
//     -appeler cette fonction au prochain rafraichissement
// *déclarez un évènement "DOMContentLoaded ".
// *à l'interieur , on mrécupère la balle
// *on récupère la limite à droite de l'écran (taille de l'écran moins la largeur de la balle )
// *appeler la fonction "animateBall"
document.addEventListener("DOMContentLoaded", function(){
  const ball = document.querySelector('.ball')
  
  let ballPosX = 0;
  let ballDirectionX = 1;
  let speed = 6;
  let limiRightX = window.innerWidth - getFullWidth(ball);

  animateBall();
  function animateBall() {
    ballPosX = ballPosX + ballDirectionX * speed;
    
    if (ballPosX >= limiRightX) {
      ballPosX = limiRightX;
      ballDirectionX = -1;
      
    }else if(ballPosX <= 0 ) {
      ballPosX = 0;
      ballDirectionX = 1;
    }
    ball.style.transform = "translateX(" + ballPosX +" px)";
    requestAnimationFrame(animateBall);
  }

  function getFullWidth(element) {
    const styles = window.getComputedStyle(element);
    // Récupérer les  propriétés calculés de l'élément

    // Récupérer la largeur, la bordure et le padding de l'élément 
    const width = element.offsetWidth; //element.scrollWidth
    const borderLeftWidth = parseFloat(styles.borderLeftWidth);
    const borderRightWidth = parseFloat(styles.borderRightWidth);
    const paddingLeft = parseFloat(styles.paddingLeft);
    const paddingRight = parseFloat(styles.paddingRight);

    // Calculer the full width including border and  padding
    const fullWidth = width + borderLeftWidth + borderRightWidth + paddingLeft + paddingRight;

    return fullWidth;
}
})
