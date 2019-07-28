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
var i = 0;
var j = 0;
var squareSize = 40;
var aSquareR = 0;
var aSquareG = 0;
var aSquareB = 0;
var bSquareR = 0;
var bSquareG = 0;
var bSquareB = 0;

//strat drawing


c.fillStyle = "#FF00EE";

for (i = 0 ; i < windowHeight ; i+=squareSize ){

  for (j = 0 ; j < windowWidth ; j+=(2*squareSize) ) {  //j = (2*squareSize)
    if ( (j==0) && (i/40%2 != 0) ){     //if first in the row, and is an odd row number, offset by 1 square
      j += squareSize;
    }//close if
    c.fillRect(j, i, 40, 40); 
    
    
    document.write("i = " +i + "   ");
    document.write("j= " + j + "<br>");
    //document.write("secondI= " + secondI + "<br>");
    
  }//close inner for loop
  
  secondI = !secondI;
  
  //update colors
  
}//close outter for loop
  
document.write("Window width = " + windowWidth + "<br>");
document.write("Window height = " + windowHeight + "<br>");



//output to console
console.log(canvas);
