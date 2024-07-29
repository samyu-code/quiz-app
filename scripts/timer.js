// Set the timer duration (in seconds)
let timerDuration = 150; // 10 minutes

// Reference to the timer display element
const timerElement = document.getElementById('timer');

// Function to start the timer
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  const interval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      alert("Time's up!");
    }
  }, 1000);
}

// Start the timer when the page loads
window.onload = () => {
  startTimer(timerDuration, timerElement);
};
