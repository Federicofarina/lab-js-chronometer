class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
      const time = setInterval(()=>{
          this.currentTime +=1
          if (printTimeCallback){
            printTimeCallback()
          }
        }, 1000)
      }
  getMinutes() {
return Math.floor(this.currentTime/60)}

  getSeconds() {
    return Math.floor(this.currentTime%60)  }
  
    getCentiseconds() {
      return  Math.floor(this.currentTime*1000)
    }    

  computeTwoDigitNumber(value) {
    if (value < 10){
      return `0${value}`
    } else{
      return `${value}`
    }
  }

  stop() {
clearInterval(this.intervalId)
clearInterval(this.currentTime)  
}

  reset() {
this.currentTime = 0  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + `:` + this.computeTwoDigitNumber (this.getSeconds())
    
    //const minutes = this.computeTwoDigitNumber(this.getMinutes());
    //const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
