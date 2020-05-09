// Write your code here
var images = [
  "https://baconmockup.com/640/360",
  "https://baconmockup.com/320/180",
  "https://baconmockup.com/980/600",
  "https://baconmockup.com/720/480",
];

var num = 0;

function next() {
  var slider = document.querySelector("#slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  var slider = document.querySelector("#slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}
