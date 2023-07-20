let countdownInterval;
let paused = false;
let pausedSeconds;

function startCountdown() {
    if (!paused) {
        const hoursInput = document.getElementById('hours');
        const minutesInput = document.getElementById('minutes');
        const secondsInput = document.getElementById('seconds');

        let hours = parseInt(hoursInput.value) || 0;
        let minutes = parseInt(minutesInput.value) || 0;
        let seconds = parseInt(secondsInput.value) || 0;

        let totalSeconds = hours * 3600 + minutes * 60 + seconds;
        pausedSeconds = totalSeconds;

        const timerDisplay = document.getElementById('timer');
        timerDisplay.innerHTML = formatTime(totalSeconds);

        countdownInterval = setInterval(() => {
            totalSeconds--;

            if (totalSeconds <= 0) {
                clearInterval(countdownInterval);
                timerDisplay.innerHTML = 'Time\'s up!';
                playBeepSound();
            } else {
                timerDisplay.innerHTML = formatTime(totalSeconds);
            }
        }, 1000);
    } else {
        paused = false;
        countdownInterval = setInterval(() => {
            pausedSeconds--;

            if (pausedSeconds <= 0) {
                clearInterval(countdownInterval);
                const timerDisplay = document.getElementById('timer');
                timerDisplay.innerHTML = 'Time\'s up!';
                playBeepSound();
            } else {
                const timerDisplay = document.getElementById('timer');
                timerDisplay.innerHTML = formatTime(pausedSeconds);
            }
        }, 1000);
    }
}

function stopCountdown() {
    clearInterval(countdownInterval);
    paused = true;
}

function resetCountdown() {
    stopCountdown();
    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerHTML = '00:00:00';
    pausedSeconds = 0;
}

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function playBeepSound() {
    const beepSound = new Audio('./audio/beep.mp3');
    beepSound.play();
}
