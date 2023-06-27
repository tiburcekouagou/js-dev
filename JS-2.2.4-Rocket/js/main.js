'use strict';
document.addEventListener("DOMContentLoaded", () => {

    /***********************************************************************************/
    /* *********************************** DONNEES *************************************/
    /***********************************************************************************/
    let billboard = document.querySelector("#billboard span");
    let count = 10;
    let click = 0;
    let rocket = document.querySelector("#rocket");
    let btn = document.querySelector("#firing-button");
    btn.disabled = true;
    let btnCancel = document.querySelector("#cancel-button");
    let restarBtn = document.querySelector("#restart-button");
    const stars = ["tiny", "normal", "big"];
    let windowWith = window.innerWidth;
    let windowHeight = window.innerHeight;
    let main = document.querySelector("main");
    let i = 0;
    let timeout;


    /***********************************************************************************/
    /* ********************************** FONCTIONS ************************************/
    /***********************************************************************************/
    /*================== La fonction du minuteur... ===================*/

    function chrono() {

        count--;
        billboard.innerText = `0${count}`;
        if (count > 0 && count <= 10) {
            rocket.src = "images/rocket2.gif"
        }

        timeout = setTimeout(chrono, 1000);

        if (count === 0) {
            count = 0;
            rocket.classList.add("tookOff");
            let tookOff = document.querySelector(".tookOff")
            if (tookOff.style.left === "85%" && tookOff.style.bottom === "500px") {
                rocket.src = "images/rocket1.png"
                tookOff.style.transform = "rotate(0deg)"
            } else {
                rocket.src = "images/rocket3.gif";
            }
            btnCancel.classList.add("disabled");
            btnCancel.removeEventListener("click", valid)

            clearTimeout(timeout);
        }

        if (count <= 0) {
            count === 10;
            clearTimeout(timeout)
        }
    }

    function restart() {
        count = 10;
        btn.addEventListener("click", start);
        clearTimeout(timeout);
        billboard.innerText = `${count}`;
        rocket.src = "images/rocket1.png";
        rocket.classList.remove("tookOff");
        btn.classList.remove("disabled");
        restarBtn.classList.add("disabled");
    }


    function start() {
        btn.removeEventListener("click", start);
        btnCancel.addEventListener("click", valid)
        btn.classList.add("disabled");
        restarBtn.classList.remove("disabled");
        chrono();
    }

    function valid() {
        btn.addEventListener("click", start);
        btnCancel.removeEventListener("click", valid)
        btn.classList.remove("disabled");
        btnCancel.classList.add("disabled");
        rocket.classList.remove("tookOff");
        rocket.src = "images/rocket1.png";
        clearTimeout(timeout);
    }

    /*======================= Start button ==========================*/











    /************************************************************************************/
    /* ******************************** CODE PRINCIPAL **********************************/
    /************************************************************************************/


    while (i < 150) {
        /* Créer un nouvel élément dans le body */
        let star = document.createElement("span");
        /* Ajouter une classe .star à l'élément nouvellement créé et l'ajouter dans le body du document*/
        star.classList.add("star");
        main.appendChild(star);

        /* Déclarer les variables permettant de générer des valeurs aléatoires à attribuer à chaque élément créer après chaque boucle*/
        let positionLeft = Math.floor(Math.random() * (windowWith - 0) + 1);
        let positionTop = Math.floor(Math.random() * (windowHeight - 0) + 1);
        let classElement = Math.floor(Math.random() * (stars.length - 0));

        /* Ajouter à chaque fois une classe aléatoire ayant un indice compris entre 0 et 2 à l'élément ayant pour classe (star) à chaque itération...*/

        star.classList.add(stars[classElement]);

        /* Attribuer une position aléatoire left et top à chaque élément nouvellement créé */

        star.style.left = `${positionLeft}px`;
        star.style.top = `${positionTop}px`;

        i++;
    }

    btn.addEventListener("click", start)
    btnCancel.addEventListener("click", valid)
    restarBtn.addEventListener("click", restart)
    restarBtn.classList.add("disabled");

});
