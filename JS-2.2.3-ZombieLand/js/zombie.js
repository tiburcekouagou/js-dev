'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const zombie = document.getElementById("zombietomb")
    let position = 0;
    let width = zombie.scrollWidth;
    let ImageWidth = width*11;
    let moveZombie = 0;
   console.log(ImageWidth);

    anim();
    function anim() {
        const setTimeoutId = setTimeout(function (){
            requestAnimationFrame(anim);
        }, 200)
        position -= width;
        if (position < -ImageWidth + 200) {
            clearTimeout(setTimeoutId);
        }
        zombie.style.backgroundPosition = `${position}px`;
    }
   
    document.addEventListener("keydown", (event)=> {
        console.log(event.key);
        if (event.key === "ArrowRight") {
            zombie.style.transform = `rotateY(180deg)`
            moveZombie += 100;
            zombie.style.marginLeft = `${moveZombie}px`
        }else
        if (event.key === "ArrowLeft") {
            zombie.style.transform = `rotateY(0deg)`
            moveZombie -= 100;
            zombie.style.marginLeft = `${moveZombie}px`
        }
        if (event.key === "ArrowUp") {
            moveZombie = 100;
            zombie.style.marginBottom = `${moveZombie}px`
        }
        if (event.key === "ArrowDown") {
            moveZombie = 100;
            zombie.style.marginTop = `${moveZombie}px`
        }
    })

})



