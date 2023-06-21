'use strict'
'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const Demarer = document.getElementById("start");
    const Arreter = document.getElementById("stop");
    const Reset = document.getElementById("reset");
    const Tierces = document.getElementById("tierces");
    const Secondes = document.getElementById("secondes");
    const Minutes = document.getElementById("minutes");
    let chronometre;
    function changeValues(node) {
        let value = parseInt(node.innerHTML);
        value++
        if(value < 10)
            node.innerHTML = "0" + value 
        else
            node.innerHTML = value 
    }
    function Play() {
        chronometre = setTimeout(() => {
            if (parseInt(Tierces.innerHTML) < 99) {
                changeValues(Tierces) 
            }
            else {
                Tierces.innerHTML = "00";
                if (parseInt(Secondes.innerHTML) < 59) {
                    changeValues(Secondes) 
                }
                else {
                    Secondes.innerHTML = "00";
    
                    if (parseInt(Minutes.innerHTML) < 59) {
                        changeValues(Minutes) 
                    }
                    else {
                        Minutes.innerHTML = "00";
                    } 
                }
            } 
            Play ();   
        }, (1000 / 90));
    }
    Demarer.addEventListener("click", () => {
        Play();
    });
    Arreter.addEventListener("click", () => {
        clearTimeout(chronometre);
    });
    Reset.addEventListener("click", () => {
        clearTimeout(chronometre);
        Tierces.innerHTML = "00";
        Secondes.innerHTML = "00";
        Minutes.innerHTML = "00";
    });
});
