'use strict'
document.addEventListener("DOMContentLoaded", function () {

let counter = 0;
let end;
let stop
let tie = 0;
let sec = 0;
let min = 0;
let heu = 0;
let dec = 0;

    const button1 = document.getElementById("debut");
    const button2 = document.getElementById("arret");
    const button3 = document.getElementById("retour");
    const chrono = document.getElementById("chrono")
    console.log(button1, button2, button3);

    chrono.innerText = heu + ' : ' + min + ' :' + sec ;

    let start = document.getElementById("debut")
    button1.addEventListener("click",
        function timer(){
            intervalId = setInterval(function(){
        
                    
                chrono.innerText = heu + ' : ' + min + ' : ' + sec;
                dec++ ;
                if(dec >= 10){
                    dec = 0; sec++ ;
                }
                if(sec >= 60){
                    sec = 0; min++ ;
                }
                if(min >= 60){
                    min = 0; heu++;
                }
            }, 1)
        })
        let Stop= document.getElementById("arret");
    button2.addEventListener("click", function(){
      clearInterval(end)
     });
     


     let reset= document.getElementById("retour");
     button3.addEventListener("click", function(){
        chrono.innerText = heu + ' : ' + min + ' : ' + sec;
      });
 
});

