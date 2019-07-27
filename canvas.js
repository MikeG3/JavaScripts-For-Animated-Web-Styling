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

//strat drawing


c.fillStyle = "#FF00EE";

for (j = 0 ; j < windowHeight ; j+=10 ){

for (i = 0 ; i < windowWidth ; i+=10 ) {
  c.fillRect(i, j, 10, 10);
  
}//close inner for loop
  
}//close outter for loop
  
c.fillRect(250, 200, 500, 400);
c.fillRect( 100, 100, 50, 50);
c.fillRect( 0, 0, 10, 100);
c.fillRect( 10, 10, 15, 25);

c.fillRect( windowWidth, 0, 10, 100);
c.fillRect( 10, 10, 15, 25);




//output to console
console.log(canvas);
