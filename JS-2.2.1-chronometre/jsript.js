let timer; 
let seconds = 0; 
function startTimer() {
    timer = setInterval(updateTimer, 1000); 
}

function stopTimer() {
    clearInterval(timer); 
}

function resetTimer() {
    seconds = 0;
    updateTimer(); 
}

function updateTimer() {
    seconds++; 
    let minutes = Math.floor(seconds / 60); 
    let remainingSeconds = seconds % 60; 
    document.getElementById("timer").textContent = minutes + "m " + remainingSeconds + "s";
}