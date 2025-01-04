let lap1 = 34
let lap2 = 33
let lap3 = 36
 
// Create a function that logs out the sum of all the lap times

function totalTime(){
    let total = lap1 + lap2 + lap3
    console.log(total)
}
totalTime()



````


let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
function lapNum(){
    lapsCompleted = lapsCompleted + 1
}
// Run it three times
lapNum()
lapNum()
lapNum()

console.log(lapsCompleted)