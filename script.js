// Timer settings
let timeLeft = 25 * 60;
let timerInterval = null;
let sessionsCompleted = 0;

// Get HTML elements
const timer = document.getElementById("timer");
const subject = document.getElementById("subject");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const sessions = document.getElementById("sessions");

// Update timer display
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timer.textContent = `${minutes}:${seconds}`;
}

// Start button
startBtn.addEventListener("click", function () {

    if (timerInterval !== null) {
        return;
    }

    let selectedSubject = subject.value.trim();

    if (selectedSubject === "") {
        message.textContent = "Please enter the subject you are studying.";
        return;
    }

    message.textContent = `Studying ${selectedSubject}... Stay focused! 📖`;

    timerInterval = setInterval(function () {

        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;

            sessionsCompleted++;
            sessions.textContent = sessionsCompleted;

            message.textContent = "🎉 Study session completed! Great job!";

            alert("Study session completed! 🎉");
        }

    }, 1000);
});

// Pause button
pauseBtn.addEventListener("click", function () {

    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;

        message.textContent = "⏸️ Timer paused. Take a short break.";
    }
});

// Reset button
resetBtn.addEventListener("click", function () {

    clearInterval(timerInterval);
    timerInterval = null;

    timeLeft = 25 * 60;

    updateTimer();

    message.textContent = "🔄 Timer reset. Ready for a new session!";
});

// Display initial timer
updateTimer();