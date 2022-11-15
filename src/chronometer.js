class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback ();
      }
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  } 

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    const valueStr = value.toString()
    if (valueStr.length === 1) {
      return `0${value}` 
    } else {
      return valueStr;
    }
  }; 

  stop() {
    this.intervalId = clearInterval((this.intervalId))
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return  `${minutes}:${seconds}`
  }
}

