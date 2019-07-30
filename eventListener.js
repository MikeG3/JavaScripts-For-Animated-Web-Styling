//window means the scope is anywhere on the browser, not just a specific HTML element
//addEventListener( Type Of Event, Name of Function called when even happens)
window.addEventListener("keydown", myFunction);

function myFunction(e) {
var key = e.keyCode;
 alert("THIS WORKS!!\nkey pressed = " + key ); 
}
