'use strict';


document.addEventListener('DOMContentLoaded', function () {
    let canvaImage = document.querySelector("#canvas");
    let contextImage = canvaImage.getContext('2d');

    

    /**
     * 
     * @param {string} src 
     * @param {integer} posX 
     * @param {integer} posY 
     * @param {CanvasRenderingContext2D} ctx 
     */
    
    function loadImage(src, posX, posY, ctx) {
         let pics = new Image();  //création d'un nouvel élément image
        pics.src = src; //insertion du chemin de l'image et son chargement

        pics.onload = () => {
            ctx.drawImage(pics, posX, posY); // Placement de l'image dans le canvas
        };
    }

    loadImage('Capture.PNG', 10, 10, contextImage);
});