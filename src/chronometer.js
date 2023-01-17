class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    // this.currentTime += 1;
    // const printingFunc = ()=> { console.log()}
    this.intervalId = setInterval(()=> {
      this.currentTime +=1
      if(printTimeCallback){
        printTimeCallback()}
      }, 1000)

    
  }

  getMinutes() {
    // ... your code goes here
    
    return Math.floor((this.currentTime)/60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime %60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringValArray = value.toString().split("")
    // console.log(stringValArray)
    
    if(stringValArray.length===1){
    stringValArray.unshift("0")
    return stringValArray[0] + stringValArray[1];}
    else{
      return value.toString();
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime=0
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}`
    
    // return computeTwoDigitNumber(this.getMinutes()) + ":" + computeTwoDigitNumber(this.getseconds())
  }
}

chron = new Chronometer()
// console.log(chron.currentTime)

console.log(chron.start(() =>console.log(4)))
console.log(chron.currentTime)
console.log(chron.getMinutes())
// console.log()
// const sayHi=()=> {console.log("Hi")}
// const intervalHi = setInterval(sayHi, 2000);
// console.log(intervalHi)

// const sayHello = () => {
//   console.log("Hello");
// };

// const timeoutId = setInterval(sayHello, 1000);
// timeoutId
// clearTimeout(timeoutId);