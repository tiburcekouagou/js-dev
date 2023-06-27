'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    let contexte = canvas.getContext('2d');
    contexte.strokeStyle = "#000";
    contexte.fillStyle = "#000";
    contexte.fillRect (190, 25, 25, 255);

   contexte.strokeRect(100, 75, 205, 25);

    contexte.font = "normal 25px OpenSans";

    // contexte.fillStyle = '#D125E6'

    // contexte.strokeText("Charcr'art ! ", 150, 325);
    contexte.fillText("Charcr'", 150, 325);
    contexte.fillText("art !'", 150 + contexte.measureText("Charcr").width + 5, 325);
    contexte.roundStyle = "#f00"
    contexte.roundRect( 10, 30, 100, 100, [50])

    // rec.addEventListener("click", function(){
    //     body.style.backgroundColor = "red"
    // })
    // console.log(rec);








































});