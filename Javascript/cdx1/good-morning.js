// Create a good-morning.js program that prints a message if it's early in the day.

// Define an hour variable and give it the current time of day.

// Write an if statement for the following:

// If hour < 12, print “Good morning 🌞” and some of your morning routines.
// After you run the code, change hour's value and run it again. Do this a few times to make sure the program is working as intended.


let hour = new Date().getHours()

if (hour < 12){
    console.log("Good morning 🌞")
    console.log("This is morning routine.")
    console.log("lets have a great day.")
}else{
    console.log("Good afternoon!")
}