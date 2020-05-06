/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

var h1 = document.querySelector("h1");
var colors = ["red", "green", "blue", "yellow", "pink"];
var min = 0;
var max = 5;

function changeBgn() {
  var random = Math.floor(Math.random() * (max - min) + min);
  h1.style.backgroundColor = colors[random];
}
setInterval(changeBgn, 1000);
