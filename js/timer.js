function countdownTimer(seconds) {
    const interval = setInterval(() => {
      seconds--;
  
      if (seconds <= 0) {
        clearInterval(interval);
        alert("Time's up!");
      } else {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const remainingSeconds = String(seconds % 60).padStart(2, "0");
  
        console.log(`${hours}:${minutes}:${remainingSeconds}`);
      }
    }, 1000);
  }
  

  const countdownTimeInSeconds = 10 * 60;
  countdownTimer(countdownTimeInSeconds);
  