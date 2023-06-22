'use strict'

// let position = 0

// document.addEventListener("DOMContentLoaded", function(){
//     const ball1 = document.querySelector("#ball1");
//     const ball2 =document.querySelector("#ball2");
//     const ball3 = document.querySelector("#ball3");
//     const updateSpeed = 1000 / 60;
//     const windowWidth = window.innerWidth;

// moveWidthSetTimeout();
// function moveWidthSetTimeout(){
//    position++;
//    if(position === (windowWidth - ball1.scrollWidth)){
//     position = -ball1.scrollWidth
//    }
   
//    ball1.style.transform = "translateX(" + position + "px)";
//     setTimeout(moveWidthSetTimeout);
  
    
// }
// function moveWidthSetTimeout(){
//     position++;
//     if(position >= (windowWidth - ball1.scrollWidth)){
//      position = -ball1.scrollWidth
//     }
//     ball1.style.transform = "translateX(-" + position + "px)";
//      setTimeout(moveWidthSetTimeout);
//  }
// moveWidthSetInterval()
// function moveWidthSetInterval(){
    
//         position++;
//         if(position >= (windowWidth + ball2.windowWidth)){
//          position = ball2.windowWidth
//         }
        
//         ball2.style.transform = "translate(" + position + "px)";
        
//          setTimeout(moveWidthSetInterval);
//          requestAnimationFrame(moveWidthRAF);

// }
// moveWidthRAF()
// function moveWidthRAF (){
   
//         position++;
//         if(position >= (windowWidth - ball3.scrollWidth)){
//          position = -ball3.scrollWidth
//         }
//         ball3.style.transform = "translateX(" + position + "px)";
//          requestAnimationFrame(moveWidthRAF)

// }

// function getFullWidth(element){
//     const styles = window. getComputedStyle(element);
//     const width = element.offseWidth;
//     const borderLeftWidth = parseFloat(styles. borderLeftWidth)
//     const borderRightWidth = parseFloat(styles.borderRight);
//     const paddingLeft = parseFloat(styles.paddingLeft)
//     const paddingRight = parseFloat(styles.paddingRight)
    

//     const fullWidth = width + borderLeftWidth +borderRightWidth + paddingLeft + paddingRight;

//     return fullWidth;
    
// }
// })
document.addEventListener("DOMContentLoaded", function(){
    const ball = document.getElementById("ball1")
let balldirection = 1;
let ballposition = 0;
let speed = 5;
let limit = 30;
const windowWidth = window.innerWidth;
const width = windowWidth - limit;


function animateBall(){
    ballposition += speed *balldirection;
    if(ballposition >= width || ballposition <= 0){
        balldirection *= -1;
    }
    ball.style.left = ballposition +"px"
    requestAnimationFrame(animateBall);
}
animateBall()
});