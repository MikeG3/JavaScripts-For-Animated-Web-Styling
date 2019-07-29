//canvas can now be called by this variable
var canvas = document.querySelector('canvas');

//set canvas height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

//Gives canvas API 2d drawing functions
var c = canvas.getContext('2d');

//variables
var frameCounter = 0;
var i = 0;
var j = 0;
var squareSize = 50;
var aSquareR = 0;
var aSquareG = 0;
var aSquareB = 0;
var aSquareA = 0.5;
var bSquareR = 0;
var bSquareG = 0;
var bSquareB = 0;
var bSquareA = 0.5;
var grayColor = 0;
var grayColorInc = true;
var incrementing = true;

//ANIMATION LOOP
function animate() {
  
  //VARIABLES

  
  //UPDATE SQUARE SIZE
  if (squareSize < 5) {
    incrementing = true;
  }
    if (squareSize > 100 || squareSize > (windowHeight/2) || squareSize > (windowWidth/2)) {
    incrementing = false;
  }
  if (incrementing){
   // squareSize++;
  }
    else {
   //   squareSize--;
   }
  
  //CHECKERED BOARD
for (i = 0 ; i < windowHeight ; i+=squareSize ){
  for (j = 0 ; j < windowWidth ; j+=(squareSize) ) {  //j = (2*squareSize)
    if ( (j==0) && (i/squareSize%2 != 0) ){     //if first in the row, and is an odd row number, offset by 1 square
      j += squareSize;
    }//close if
    //update colors
    aSquareR += 5;
    aSquareR %= 255;
    aSquareG += 25;
    aSquareG %= 255;
    aSquareB += 3;
    aSquareB %= 255;
    bSquareR += 3;
    bSquareR %= 255;
    bSquareG += 2;
    bSquareG %= 255;
    bSquareB += 2;
    bSquareB %= 255;
    if ( i%2 == 0 && j%2 ==0 ) {
      c.fillStyle = 'rgba(0,100,' + aSquareB + ','+ aSquareA + ')';
    }//close if
    else  if ( i%2 == 1 && j%2 == 1 ){
        c.fillStyle = 'rgba(0,100,' + bSquareB + ','+ bSquareA + ')';
    }
    c.fillRect(j, i, squareSize, squareSize);  
  }//close inner for loop
  
}//close outter for loop
  
//TEXT
c.font = "50px Comic Sans MS";
if (frameCounter % 255 == 254 && grayColorInc) {
  grayColorInc = false;
}//close if
else if (frameCounter % 255 == 254 && !grayColorInc) {
  grayColorInc = true;
}//close if  
if (grayColorInc){
  grayColor++;
}//close if
else { 
  grayColor--;
}//close else
c.fillStyle = "rgb(" + grayColor + "," + grayColor + "," + grayColor + ")";


c.textAlign = "center";
c.fillText("Michael Garner Designs", canvas.width/2, canvas.height/2);   
  
  
//ANIMATE
frameCounter++;
requestAnimationFrame(animate);
//output to console
console.log(canvas);
};

animate();
