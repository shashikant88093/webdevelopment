const container = document.querySelector(".container")

let viewTimeElement = document.querySelector('p');
viewTimeElement.textContent = "00";

// Removed container.appendChild(container) to prevent DOM errors

const start = document.getElementById("start")
const reset = document.getElementById("reset")
const stop = document.getElementById("stop")

let timerId = null
let timerValue = 0;
let storedValue = 0;

start.addEventListener('click', () => {
    if (timerId !== null) return; // Prevent multiple intervals
    timerId = setInterval(() => {
        timerValue++;
        viewTimeElement.textContent = timerValue < 10 ? "0" + timerValue : timerValue;
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    storedValue = timerValue; // Store the current value when stopped
});

reset.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    timerValue = 0;
    storedValue = 0;
    viewTimeElement.textContent = "00";
});


console.log(timerValue)