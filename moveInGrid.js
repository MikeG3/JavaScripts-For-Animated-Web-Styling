//canvas can now be called by this variable
var canvas = document.querySelector('canvas');

//set canvas height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

//Gives canvas API 2d drawing functions
var c = canvas.getContext('2d');

//GLOBAL VARIABLES
var frameCounter = 0;
var i = 0;
var j = 0;
var xPos = 0;
var yPos = 0;
var gridSizeX = 10;
var gridSizeY = 10;
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
var incrementing = true;



c.fillStyle = "#FF00EE";


function animate() {
  
  //LOCAL VARIABLES 

 //CHECKERED BOARD
for (i = 0 ; i < 10*squareSize ; i+=squareSize ){
  for (j = 0 ; j < 10*squareSize  ; j+=(squareSize) ) {  //j = (2*squareSize)

    //UPDATE COLORS
    aSquareR += 5;
    aSquareR %= 255;
    aSquareG += 25;
    aSquareG %= 255;
    aSquareB += 15;
    aSquareB %= 255;
    bSquareR += 3;
    bSquareR %= 255;
    bSquareG += 2;
    bSquareG %= 255;
    bSquareB += 6;
    bSquareB %= 255;
    if ( i%2 == 0 && j%2 ==0 ) {
      c.fillStyle = 'rgba(0,100,250, 0.5)';
    else  if ( i%2 == 1 && j%2 == 1 ){
        c.fillStyle = 'rgba(200,100,50, 0.5)';
    }
    c.fillRect(j, i, squareSize, squareSize);  
  }//close inner for loop
  
}//close outter for loop
 
//TEXT

//ANIMATE
frameCounter++;
requestAnimationFrame(animate);
//output to console
console.log(canvas);
};

animate();
