'use strict';

// On défini la propriété de notre carré que l'on va dessiner dans un objet
let square = {
    color: "#FF0000",
    length: 20,
    x: 10,
    y: 10
};

// Notre contexte et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {
    canvasDom = document.querySelector("#canvas");
    ctx = canvasDom.getContext('2d');


    /*===========Fonction qui affiche et redessine les éléments dans le canvas==========================*/

    function displaySquare() {
        ctx.clearRect(0, 0, canvasDom.width, canvasDom.height); //vider le canvas avant de redessiner un autre rectangle 
        ctx.fillStyle = '#FF0000' // couleur du rectangle qu'on veut dessiner
        ctx.fillRect(square.x, square.y, square.length, square.length);


    }

    /*===================Fonction de gestion des événements du clavier=============================*/

    /**
     * 
     * @param {down} eventKey pour l'événement keydown ;
     */
    function moveSquare(eventKey) {
        //paramétrage de chaque de touche de direction;
        switch (eventKey.key) {
            case 'ArrowRight':
                if (square.x + square.length < canvasDom.width) {
                    square.x++;
                }
                break;

            case 'ArrowLeft':
                if (square.x > 0) {
                    square.x--;
                }
                break;
            case 'ArrowDown':
                if (square.y + square.length < canvasDom.height) {
                    square.y++;
                }
                break;
            case 'ArrowUp':
                if (square.y > 0) {
                    square.y--;
                }
                break;

            default:
                break;
        }
        displaySquare();
    }

    
    displaySquare();
    document.addEventListener("keydown", moveSquare);

});