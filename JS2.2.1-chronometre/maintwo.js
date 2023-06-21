document.addEventListener("DOMContentLoaded", function () {
    // déclaration des variables à utiliser

    let chrono = document.getElementById("chrono");
    let start = document.getElementById("began");
    let finaly = document.getElementById("end");
    let reset = document.getElementById("zero");

    // déclaration des variables du temps

    let minutes = 0;
    let secondes = 0;
    let millisecondes = 0;

    let timeOut;

    const debut = function defile() {

        millisecondes = parseInt(millisecondes);
        secondes = parseInt(secondes);
        minutes = parseInt(minutes);

        millisecondes++;

        if (millisecondes == 60) {
            secondes++;
            millisecondes = 0;
        }

        if (secondes == 60) {
            minutes++;
            secondes = 0;
        }

        //   affichage
        if (millisecondes < 10) {
            millisecondes = "0" + millisecondes;
        }

        if (secondes < 10) {
            secondes = "0" + secondes;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        chrono.innerText = `${minutes}:${secondes}:${millisecondes}`
        timeOut = setTimeout(defile, 50);
    };

    start.addEventListener("click", debut);
    finaly.addEventListener("click", () => {
        clearTimeout(timeOut);
    });
    reset.addEventListener("click", () => {
        chrono.innerText = "00:00:00";
        minutes = 0;
        secondes = 0;
        millisecondes = 0;
        clearTimeout(timeOut);
    });


});