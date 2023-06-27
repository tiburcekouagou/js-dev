'use strict';


// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener('DOMContentLoaded',function(){
    let canvasText = document.querySelector("#canvas");
    let conText = canvasText.getContext('2d');
    conText.font = "bold 20px sans-serif" ;
    conText.fillStyle = ("maroon");
    conText.fillText('Hello', 10, 100);

    conText.fillStyle = "blue";
    conText.fillText('World', 10 + conText.measureText("Hello").width+10, 100);

    conText.fillStyle = "green";
    conText.fillText('!', 10 + conText.measureText("Hello World").width+10, 100);
});