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
var secondI = new Boolean(false);
var aSquareR = 0;
var aSquareG = 0;
var aSquareB = 0;
var bSquareR = 0;
var bSquareG = 0;
var bSquareB = 0;

//strat drawing


c.fillStyle = "#FF00EE";

for (i = 0 ; i < windowHeight ; i+=80 ){

  for (j = 0 ; j < windowWidth ; j+=40 ) {
    if (secondI){
      j += 40;
    }//close if
    c.fillRect(i, j, 40, 40); 
    secondI = !secondI;
    
    document.write("i = " +i);
    document.write("j= " + j);
    
  }//close inner for loop
  
  //update colors
  
}//close outter for loop
  
document.write("Window width = " + windowWidth);
document.write("Window length = " + windowLength);



//output to console
console.log(canvas);
