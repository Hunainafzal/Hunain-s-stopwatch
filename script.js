
var hrElement = document.getElementById("hr");
var minElement = document.getElementById("min");
var secElement = document.getElementById("sec");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

var timerInterval;
var startTime;
var elapsedTime = 0;

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
}

function stop() {
  clearInterval(timerInterval);
  startButton.disabled = false;
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay(0, 0, 0);
  startButton.disabled = false;
}


function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var time = calculateTime(elapsedTime);
  updateDisplay(time.hours, time.minutes, time.seconds);
}

function calculateTime(time) {
  var hours = Math.floor(time / (1000 * 60 * 60));
  time %= 1000 * 60 * 60;
  var minutes = Math.floor(time / (1000 * 60));
  time %= 1000 * 60;
  var seconds = Math.floor(time / 1000);

  return {
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0")
  };
}

function updateDisplay(hours, minutes, seconds) {
  hrElement.textContent = hours;
  minElement.textContent = minutes;
  secElement.textContent = seconds;
}


startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

















