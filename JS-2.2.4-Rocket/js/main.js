'use strict';
document.addEventListener("DOMContentLoaded", function () {

    /***********************************************************************************/
    /* *********************************** DONNEES *************************************/
    /***********************************************************************************/

    let start = document.getElementById("firing-button");
    let table = document.querySelector("#billboard span");
    let rocket = document.getElementById("rocket");
    let stop = document.getElementById("canceling-button");
    let time;
    let decollage;
    let disable;
    let count = 5;
    let refresh = this.getElementById("reset");

    /***********************************************************************************/
    /* ********************************** FONCTIONS ************************************/
    /***********************************************************************************/

    function compteRebours() {
        if (count >= 1) {
            count--
            table.innerText = "0" + count;
        }
    }
    function taille(element) {

        let ran = Math.random();
        if (ran <= 1 / 3) {
            element.classList.add("tiny");
        }
        else if (ran > 1 / 3 && ran < 2 / 3) {
            element.classList.add("normal");
        }
        else {
            element.classList.add("big")
        }
    }

    let random = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

    /************************************************************************************/
    /** ******************************* CODE PRINCIPAL **********************************/
    /************************************************************************************/

    start.addEventListener("click", function () {
        time = setInterval(() => {
            compteRebours();
        }, 1000);
        rocket.src = "images/rocket2.gif";
        decollage = setTimeout(() => {
            rocket.src = "images/rocket3.gif"
            rocket.classList.add("tookOff")
        }, 1000);
        setTimeout(() => {
            rocket.src = "images/rocket1.png"
        }, 6000);
        start.classList.add("disabled")
        stop.classList.remove("disabled");
    })
    
    for (let i = 0; i < 923; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        document.querySelector("main").appendChild(star);
        taille(star);
        star.style.top = `${random(0, 100)}%`;
        star.style.left = `${random(0, 100)}%`;
    }

    stop.addEventListener("click", function () {
        disable = setTimeout(() => {
            stop.classList.add("disabled")
        }, 6000);
        stop.classList.add("disabled");
        start.classList.remove("disabled");
        clearInterval(time);
        clearTimeout(decollage);
        clearTimeout(disable);
    });
    refresh.addEventListener("click", function(){
        setTimeout(() => {
            rocket.src = "images/rocket1.png"
        }, 6000);
        rocket.src = "images/rocket3.gif";
        rocket.classList.remove("tookOff")
    });
    
    // rocket.style.transform = "rotate(180deg)";

});
