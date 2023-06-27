'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const StartBtn = document.getElementById("firing-button")
StartBtn.disabled = false;
const EndBtn = document.getElementById("firing-button1")
EndBtn.disabled = true;
const Chrono = document.querySelector("span")
let num = 11;
const rocket1 = document.getElementById("rocket")
const rocket2 = document.getElementById("rocket2")
let rocket3 = document.getElementById("rocket3")
console.log(rocket1, rocket2);

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
document.addEventListener("DOMContentLoaded", () => {


    StartBtn.addEventListener("click", () => {
        // StartBtn.classList(".disabled")

        rocket1.style.display = "none"
        rocket2.style.display = "block"

        let decompte = setInterval(function () {
            num--;
            if (num < 10) {
                num = `0${num}`
            }
            if (num <= 0) {
                clearInterval(decompte)

                rocket2.style.display = "none";
                rocket3.style.display = "block";
                // rocket3.classList(".tookOff")
                setInterval(function Anim() {
                    // rocket3.style.transform = " rotate(60deg)"
                    // rocket3.style.bottom = "1500px"
                    // rocket3.style.left = "2000px"
                     rocket3.classList.add("tookOff")                   
                }, 1000)
            }
            Chrono.innerHTML = num;
        }, 1000)
    })
    EndBtn.addEventListener("click", () => {
        decompte = null;
        console.log(decompte);
        console.log("message");
        clearInterval(decompte)

    })
})


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
