'use strict';

document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.querySelector("#canvas");
    console.log(canvas);
    let contextNoir = canvas.getContext('2d');
    let contextGreen = canvas.getContext('2d');
    let contextRed = canvas.getContext('2d');

    contextGreen.strokeStyle = "black";
    contextGreen.strokeRect(5, 5, 100, 50);


    contextGreen.strokeStyle = "green";
    contextGreen.strokeRect(105, 5, 100, 50);

    contextRed.fillStyle = "red";
    contextRed.fillRect(205, 5, 100, 50);
});

