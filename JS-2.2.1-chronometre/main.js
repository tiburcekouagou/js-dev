'use strict'
'use strict'

let tierces = document.querySelector(".tierces")
let secondes = document.querySelector(".secondes")
let times = document.querySelector(".times")

 document.getElementById("chrono").innerHTML = times.toString().padStart(2, "0") + ":" +
                                               secondes.toString().padStart(2, "0") + ":" +
                                               tierces.toString().padStart(2, "0")
                                               


function fonctionchro() {
    tierces = 0;
    secondes = 0;
    times = 0;

    if (tierces <= 100) {
        tierces++
        if (secondes >= 60) {
            secondes++
        }
    }
   
}

console.log(fonctionchro());