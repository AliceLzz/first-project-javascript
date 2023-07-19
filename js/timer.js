function startCountdown() {
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    
    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;
    
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerHTML = formatTime(totalSeconds);
    
    const countdownInterval = setInterval(() => {
      totalSeconds--;
      timerDisplay.innerHTML = formatTime(totalSeconds);

      if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        timerDisplay.innerHTML = 'Time\'s up!';
      }
    }, 1000);
  }
  
  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }