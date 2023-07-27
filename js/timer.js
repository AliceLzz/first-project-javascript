let countdownInterval; // that will store the timer returned by the setInterval function.  //setInterval() method calls a function at specified intervals 
let paused = false;
let pausedSeconds; //stores the number of seconds that have passed since the timer was paused.

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

function formatTime(totalSeconds) {  //  let totalSeconds = hours * 3600 + minutes * 60 + seconds; pausedSeconds = totalSeconds;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function playBeepSound() {
    const beepSound = new Audio('./audio/beep.mp3');
    beepSound.play();
}

function startCountdown() {  
    if (!paused) {  // checks the value of the paused variable using the if (!paused) statement.
        const hoursInput = document.getElementById('hours');  //the function retrieves the values of hours, minutes, and seconds from HTML form elements. 
        const minutesInput = document.getElementById('minutes');
        const secondsInput = document.getElementById('seconds');

        let hours = parseInt(hoursInput.value) || 0;  //The retrieved values for hours, minutes, and seconds are converted to numeric format using the parseInt() function.
        let minutes = parseInt(minutesInput.value) || 0;
        let seconds = parseInt(secondsInput.value) || 0;

        let totalSeconds = hours * 3600 + minutes * 60 + seconds;
        pausedSeconds = totalSeconds;   //calculate the total secods

        const timerDisplay = document.getElementById('timer');  //<div id="timer">00:00:00</div>
        timerDisplay.innerHTML = formatTime(totalSeconds);

        countdownInterval = setInterval(() => {
            totalSeconds--;  //repeatedly at a given time interval. //countdown progresses, and the remaining time gets updated every second.

            if (totalSeconds <= 0) { //totalSeconds is less than or equal to 0, indicating that the countdown is complete, 
                clearInterval(countdownInterval); //kill the counterdownInterval function.
                timerDisplay.innerHTML = 'Time\'s up!';
                playBeepSound();
            } else {
                timerDisplay.innerHTML = formatTime(totalSeconds); //look formattime functipon at above. 
            }  // display the remaining time in the format "hours:minutes:seconds" using the formatTime(totalSeconds) function.
        }, 1000);  //for 1000 the countdown timer is updated every second, providing a smooth and accurate representation of the remaining time to the user.
    } else {  //countdown to resume after it has been paused.
        paused = false; //the countdown has been paused and will now be resumed.
        countdownInterval = setInterval(() => {
            pausedSeconds--;  //store the value of pausedSeconds in a variable.

            if (pausedSeconds <= 0) {
                clearInterval(countdownInterval);
                const timerDisplay = document.getElementById('timer');
                timerDisplay.innerHTML = 'Time\'s up!';
                playBeepSound();
            } else { // or not paused display the remaining time in the format "hours:minutes:seconds" using the formatTime(pausedSeconds
                const timerDisplay = document.getElementById('timer');
                timerDisplay.innerHTML = formatTime(pausedSeconds);
            }
        }, 1000);
    }
}

