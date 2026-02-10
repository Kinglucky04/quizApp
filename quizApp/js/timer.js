// timer.js
// when time is up the question should close
// it should display the allocated time before the page starts
// the rules should be displayed too
// implement the question counter
// the timer should. be 20 min
const timeElement = document.getElementById("time");
const timerBox = document.querySelector(".timer");

let timeLeft = 60; // seconds
export let timerInterval;

export function startTimer() {
    clearInterval(timerInterval); // prevent multiple timers
    timeLeft = 60;

    updateTimeDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimeDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

export function updateTimeDisplay() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    timeElement.textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 10) {
        timerBox.classList.add("warning");
        timeElement.style.color = "#ef4444"; // red
    } /* else if (timeLeft <= 100) {
        timeElement.style.color = "#0ea5e9"; // soft blue
    } */else {
        timerBox.classList.remove("warning");
        timeElement.style.color = "";
    }
}


export function handleTimeUp() {
    // alert("Time's up!");
    // Dispatch a custom event so main.js can stop the quiz
    document.dispatchEvent(new Event("timeUp"));
}
