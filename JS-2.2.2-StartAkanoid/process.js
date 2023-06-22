// Initialisez les variables ballDirection, ballPosition, speed , limitX, 
// Créez une fonction animateBall, c'est elle qui se chargera de déplacer la balle
//      - Modifier la position de la balle en y ajoutant 1 ou en soustrayant 1 selon la direction   
//      - Modifier le style de l'objet DOM
//      - Si la ballee atteint les limites droite ou gauche de l'écran - on multiplie par -1 la direction pour l'inverser
//      - appeler cette fonction au prochain rafraichissement
// Déclarer un évènement "DOMContentLoaded"
// A l'intérieur, on récupère la balle
// On récupère la limite à droite de l'écran (taille de l'écran moins la largeur  de la balle)
// appeler la fonction animateBall