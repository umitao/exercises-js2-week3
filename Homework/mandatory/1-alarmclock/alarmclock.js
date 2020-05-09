function setAlarm() {
  var alarmSet = document.querySelector("#alarmSet");
  var integer = document.querySelector("#timeRemaining");

  integer.innerText = alarmSet.value;
  //console.log(typeof setTimer.value);
  //var integer = parseInt(timeRemaining.innerText, 10);
  //console.log(typeof integer);
  var timer = setInterval(function () {
    integer.innerText--;
    if (integer === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
