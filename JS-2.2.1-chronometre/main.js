'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const Demarer = document.getElementById("start");
    const Arreter = document.getElementById("stop");
    Arreter.disabled = true;
    console.dir(Arreter);
    const Reset = document.getElementById("reset");
    const Tierces = document.getElementById("tierces");
    const Secondes = document.getElementById("secondes");
    const Minutes = document.getElementById("minutes");
    let chronometre;
    function changeValues(node) {
        let value = parseInt(node.innerHTML);
        value++;
        if(value < 10)
            node.innerHTML = "0" + value;
        else
            node.innerHTML = value;
    }
    function Play() {
        chronometre = setTimeout(() => {
            if (parseInt(Tierces.innerHTML) < 99) {
                changeValues(Tierces); 
            }
            else {
                Tierces.innerHTML = "00";
                if (parseInt(Secondes.innerHTML) < 59) {
                    changeValues(Secondes);
                }
                else {
                    Secondes.innerHTML = "00";
    
                    if (parseInt(Minutes.innerHTML) < 59) {
                        changeValues(Minutes);
                    }
                    else {
                        Minutes.innerHTML = "00";
                        if(parseInt(Minutes.innerHTML) < 23) {
                            changeValues(Heures);
                        }
                        else{
                            
                        }
                    } 
                }
            } 
            Play ();   
    }, (1000 / 90));
    }
    Demarer.addEventListener("click", () => {
        Arreter.disabled = false;
        Demarer.disabled = true;
        Play();
    });
    Arreter.addEventListener("click", () => {
        clearTimeout(chronometre);
        Arreter.disabled = true;
        Demarer.disabled = false;
        Demarer.style.backgroundColor = "violet";
        Demarer.innerHTML = "Continue";
    });
    Reset.addEventListener("click", () => {
        clearTimeout(chronometre);
        Tierces.innerHTML = "00";
        Secondes.innerHTML = "00";
        Minutes.innerHTML = "00";
        Demarer.innerHTML = "Start";
        Demarer.style.backgroundColor = "red";

    });
});




// // Correction de l'exercice de chronomètre

// let chronoDom;

// let chrono = {
//     tierce = 0 ,
//     seconde = 0,
//     minute = 0,
// };
// document.addEventListener("DOMContentLoaded", function () {

// // La logique à suivre

// // déclarer des variables  pour les tierces, les secondes et les Minutes;
// // récupérer les éléments de déclenchement et d'arrêt;
// // recupérer les éléments de html ou du chronometre.Arreter

// // au clic du boutton start, le chronometre commence par un compteur (setTimeout)
// //         -la tierces compte de 0 à 59 puis,
// //         -la seconde s'incremente de 1 quand elle atteint 60,
// //         -la minute s'incremente de 1 et la seconde retourne à 00.

// // au clic du boutton stop, le chronometre s'arrete (clearTimeout)


// // L'objet du DOM où sera écrit la valeur du chronomètre
// chronoDom = document.querySelector("#chrono")

// // Le boutton de demarrage du chronomètre 
// let startButton = document.querySelector("#start-btn")

// // Le boutton d'arrêt du chronomètre
// let stopButton = document.querySelector("#stop-btn")

// // Le boutton de reset du chronomètre 
// let resetButton = document.querySelector("reset-btn")


// //   la tierce 
// let tierce = 0;
// //  la seconde
// let seconde = 0;
// // la minute
// let minute = 0;



// // 12 : 30 : 34
// // 12 min : 30 sec 34 tierce

// chronoDom.innerText = chrono.minute + " : " + chrono.seconde + " : " + chrono.tierce;

// startButton.addEventListener("click", function() {
//     setInterval
//     chrono.tierce++;
//     updateDisplay

// });















    
// });
