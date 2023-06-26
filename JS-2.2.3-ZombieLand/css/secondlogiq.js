if (event.code === "ArrowLeft"){

    leftClickCount++;

    if (leftClickCount === 1){

        console.log(leftClickCount)
        zombieSprite.style.transform = "rotateY(0deg)";
        zombieSprite.style.transform = `translate(-1100px)`;
        clearTimeout(timeout)
        
    }
     else {

         zombie.style.transform = `translate(${arg}px)`;
         leftClickCount = 0;

    }

    arg -= 100;

} else if(event.code === "ArrowRight"){

    rightClickCount++;

    if (rightClickCount === 1){

        zombieSprite.style.transform = "rotateY(180deg)";
        clearTimeout(timeout)
        

    } 

    zombie.style.transform = `translate(${arg}px)`;

    arg += 100;

}

