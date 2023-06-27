'use strict'
/*
*declarer des variables pour les tierces , les secondes et les tierces
*recuperer les élémnts de declenchement , d"arrêt et de reset
*recuper l'element html où afficher la chronomètre

**au clic du bouton , le chronomètre commence par compter (setTimesout)

*/

document.addEventListener("DOMContentLoaded", function(){
    const startchrono = document.querySelector(".start")

    const endchrono= document.querySelector(".pause")
    endchrono.disabled = true ;
    console.dir(startchrono)
    const reset = document.querySelector(".reset")
    const chronoDom = document.getElementById("chrono")
    let timesId;
    // timesId = setTimeout(addition,1000 / 60)
    let chrono = {
        tierces: 0,
        secondes: 0,
        minutes: 0,
    
    }
    function formatchrono(num) {
        if (num < 10) {
           return num = "0"+ num;
        }else{return num}
    }
    function updatchrono() {
        chronoDom.innerHTML = `${formatchrono(chrono.minutes)} min  ${formatchrono(chrono.secondes)} sec ${formatchrono(chrono.tierces)} tierce` 
        
    }
    // chrono.minutes + " min " + chrono.secondes + " sec " + chrono.tierces + " t"
startchrono.addEventListener("click", function(){
    endchrono.disabled = false;
    startchrono.disabled = true;
    setTimeout(function addition() {
        if (chrono.tierces > 59) {
            chrono.tierces = 0;
            chrono.secondes++}
            else if (chrono.secondes > 59) {
            chrono.secondes = 0;
            chrono.minutes++
        }
        chrono.tierces++
        updatchrono();
        setTimeout(addition, 1000 / 60);
    }, 1000 / 60);
})
endchrono.addEventListener("click", function(){
   clearTimeout(timesId)
   endchrono.disabled = false;
    startchrono.disabled = true;
})

})







// document.addEventListener("DOMContentLoaded", function () {
//     let tierces = document.querySelector(".tierces")
//     let secondes = document.querySelector(".secondes")
//     let times = document.querySelector(".times")
    
//     //  document.getElementById("chrono").innerHTML = times.toString().padStart(2, "0") + ":" +
//     //                                                secondes.toString().padStart(2, "0") + ":" +
//     //                                                tierces.toString().padStart(2, "0")
                                                   
//     const start = document.querySelector(".start")
//     const pause = document.querySelector(".pause")
//     const reset = document.querySelector(".reset")
//     start.innerHTML = start.addEventListener("click", startchrono)
//     pause.innerHTML = pause.addEventListener("click", endchrono)
//     tierces = 0;
//     function startchrono() {
//         tierces++
//         console.log("bonjour" + tierces); 
//     //    setTimeout(fonctionChrono(), 1000/60)
//     //    function fonctionChrono() {
//     //     tierces++;
//     //     setTimeout(fonctionChrono(), 1000/60)
//     //    }
//     }
//     function endchrono() {
//         console.log("bonsoir");
//     }
    
// })
