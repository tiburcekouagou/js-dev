'use strict';
document.addEventListener("DOMContentLoaded", ()=>{

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
    let billboard = document.querySelector("#billboard span");
    let count = 11;
    let click = 0;
    let rocket = document.querySelector("#rocket") ;
    let btn = document.querySelector("#firing-button");
    btn.disabled = true;
    let btnCancel = document.querySelector("#cancel-button");
    let star = document.querySelector(".star")


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
    /*================== La fonction du minuteur... ===================*/

    function chrono () {
        
        count--;
        

        billboard.innerText = `${count}`;
        if (count > 0 && count <= 10) {
            rocket.src = "images/rocket2.gif"
        }

        
        const timeout = setTimeout(chrono, 1000);
        
        if (count === 0) {
            count = 0 ;
            rocket.src = "images/rocket3.gif"
            rocket.classList.add("tookOff");
            clearTimeout(timeout);
        }
        
    }

    /*======================= Start button ==========================*/


    function button (){
        btn.addEventListener("click", ()=>{ 
            btn.classList.add("disabled");
            chrono();
            
        });
    }


    /*======================== Stars ============================*/

    function generateStars(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min) ;
    }



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
    star
   button();

});
