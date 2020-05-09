function setAlarm() {
  var timeRemaining = document.querySelector("#timeRemaining");
  var alarmSet = document.querySelector("#alarmSet");
  timeRemaining.innerText = alarmSet.value;
  //console.log(typeof setTimer.value);
  var integer = Number.parseInt(timeRemaining.innerText, 10);
  //console.log(typeof integer);
  var countdown = setInterval(function () {
    integer--;
    if (integer == 0) {
      clearInterval(countdown);
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
