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


````
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
let count = 0
function increment(){
    count = count + 1
    console.log(count)
}
increment()