document.addEventListener("DOMContentLoaded", ()=>{
    /**
     * L'objet du DOM Canvas
     */
    let canvas = document.getElementById("canvas");
    /**
     * Le context utilisé avec Canvas qui donne accès aux librairies de manipulation
     */
    let ctx = canvas.getContext('2d');
    console.log(ctx);
    /**
      * On dit au context que la couleur du remplissage est rouge
     */
    //  ctx.strokeStyle ='green'; // contour
    ctx.fillStyle ='blue'
    ctx.fillRect(50, 50, 100, 150)
     ctx.fillStyle = "white" // fond
     ctx.fillRect(150, 50, 100, 150)
     ctx.fillStyle = "red" // fond
     ctx.fillRect(250, 50, 100, 150)
    /**
     * On trace le contour (stoke) d'un rectangle
     * strokeRect(pX, pY, width, height)
    */
//    ctx.strokeRect(50, 50, 200, 150)
   /**
    * On definie la police de caractère pour tous les textes
    */
    ctx.font =  'bold 18px Verdana'
   /**
    * couleur pour écrire Hello
    */
   ctx.fillStyle = 'yellow'
   ctx.fillText('Ici c\'est la France 💎', 100, 30)

   ctx.fillStyle = 'blue';
   ctx.fillText('La zone 75 🎈',ctx.measureText('Ici c\'est la France 💎').width, 250)
})