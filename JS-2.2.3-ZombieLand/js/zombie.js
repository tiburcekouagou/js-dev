'use strict';


document.addEventListener("DOMContentLoaded", function(){
    // debugger;
    const tomb = document.getElementById("zombietomb");
    const image = document.querySelector(".image");
    let divSize = tomb.offsetWidth;
    console.log(divSize);
    let size = image.offsetWidth;
    console.log(size);
    let position = 0;

    

    function animZombie(){

        position -= divSize;        

        if(position <= -size){

            position = 0;        

        };
        setTimeout(() => {

            image.style.transform = "translateX(" + (position) +"px)";

            animZombie();
            
        }, 200);
    };          
    
    animZombie();

    document.addEventListener("keydown",function(event){
        console.log(event.code);
    })
});

/**
 * recupére la div de la tombe dans une variabe "tomb"
 * recupére l'image insérer dans la div dans une variabe "image"
 * récupére la taille de l'image dans une variable "size"
 * initialiser la position "position" de depart à 0
 * 
 * recuper la taille de l'une des parties de l'image dans une variable "imageSize"
 * 
 * incrémente la position de l'image a la valeur de "imageSize"
 */