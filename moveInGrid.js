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
for (i = 0 ; i < gridSizeY ; i++ ){
  for (j = 0 ; j < gridSizeX  ; j++) { 

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
    
    //UPDATE FILLSTYLE AFTER COLOR IS SELECTED
    c.fillStyle = 'blue';
    if ( i%2 == 0 && j%2 ==0 ) {
      c.fillStyle = 'pink';
    }//close if
    else {
        c.fillStyle = 'blue';
    }
    c.fillRect(j*squareSize , i*squareSize , squareSize, squareSize);  
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
