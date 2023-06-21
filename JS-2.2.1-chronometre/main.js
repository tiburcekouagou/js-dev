'use strict'
// ## Bonus 2
// Rajoutez un bouton `Start / Stop` et `Reset` 
// Nous allons aussi augmenter la précision de notre chronomètre en rajoutant les centièmes de seconde !

document.addEventListener("DOMContentLoaded", function () {
    /**
     * Déclaration des variables et affectation
     */
    const tierce = document.querySelector("#chrono .tierces");
    const seconds = document.querySelector("#chrono .seconds");
    const minutes = document.querySelector("#chrono .minutes");
    const hours = document.querySelector("#chrono .hours");
    const start = document.querySelector("#start");
    const stop = document.querySelector("#stop");
    const restart = document.querySelector("#restart");
    /**
     * Déclaration des minuteurs
     */
    let hoursCounter = 0;
    let minCounter = 0;
    let secondCounter = 0;
    let millisecondsCounter = 0;
    let intervalId;

    /**
     * Cette fonction permettra de débuter le minuteur.
     */
    function chrono() {
        millisecondsCounter++;

        /**
         * Incrémentation de la seconde lorsque la tiece passe à 100.
         */
        if (millisecondsCounter === 100) {
            secondCounter++
            millisecondsCounter = 0;
        }

        /**
         * Incrémentation de la minuite lorsque la seconde passe à 60.
         */
        if (secondCounter === 60) {
            minCounter++;
            secondCounter = 0;
        }

        /**
        * Incrémentation de l'heure lorsque la minuite passe à 60.
        */
        if (minCounter === 60) {
            hoursCounter++;
            minCounter = 0;
        }


        /**
         * Ces conditions sont censées ajouter un zero (0) à chaque minuteur lorsue la valeur de celui-ci est inférieur à 10 soit (09 au lieu de 9, 05 au lieu de 5);
         */

        /**
         * Le cas des tierces
         */
        if (millisecondsCounter < 10) {
            tierce.innerText = "0" + millisecondsCounter;
        } else {
            tierce.innerText = millisecondsCounter;
        }

        /**
        * Le cas des secondes
        */
        if (secondCounter < 10) {
            seconds.innerText = "0" + secondCounter + ":";
        } else {
            seconds.innerText = secondCounter + ":";
        }
        /**
        * Le cas des minuites
        */
        if (minCounter < 10) {
            minutes.innerText = "0" + minCounter + " : ";
        } else {
            minutes.innerText = minCounter;
        }

        /**
        * Le cas des heures
        */
        if (hoursCounter < 10) {
            hours.innerText = "0" + hoursCounter + " : ";
        } else {
            hours.innerText = hoursCounter + " ";
        }

        /**
         * Cette ligne de code appelle la fonction chrono() en elle-même (fonction récursive)
         */
        intervalId = setTimeout(chrono, 10);
    }


    /**
    * Cette ligne de code démarre le minuteur au click du bouton START
    */
    start.addEventListener("click", function () {
        chrono();
<<<<<<< HEAD
        start.style.display = "none";
        stop.style.display = "block";

=======
>>>>>>> ffa04093fe5f42f33175033d341ba3596399453e
    });

    /**
    * Cette ligne de code arrête le minuteur au click du bouton STOP
    */
    stop.addEventListener("click", function () {
        clearTimeout(intervalId);
<<<<<<< HEAD
        stop.style.display = "none";
        start.style.display = "block";

=======
>>>>>>> ffa04093fe5f42f33175033d341ba3596399453e
    })

    /**
    * Cette ligne de code réinitialise le minuteur au click du bouton RESTART
    */
    restart.addEventListener("click", function () {
        hours.innerText = "00 :";
        minutes.innerText = "00 :";
        seconds.innerText = "00 :";
        tierce.innerText = "00";
        clearTimeout(intervalId);
        hoursCounter = 0;
        minCounter = 0;
        secondCounter = 0;
        millisecondsCounter = 0;
<<<<<<< HEAD
        stop.style.display = "block";
        start.style.display = "block";
=======
>>>>>>> ffa04093fe5f42f33175033d341ba3596399453e
    })


})
