//  In summer 2023, the smoke from wildfires in Canada raised concerns about the Air Quality Index (AQI) in one's area.

// Create an air-quality-index.js program.

// Google the AQI in your area and define an aqi variable with that number.

// Write an if/else if/else statement with the following logic:

// If aqi is between 0 and 50, print "Good".
// Else if aqi is between 51 and 100, print "Moderate".
// Else if aqi is between 101 and 150, print "Unhealthy (Sensitive Groups)".
// Else if aqi is between 151 and 200, print "Unhealthy".
// Else if aqi is between 201 and 300, print "Very Unhealthy".Else, print "Hazardous".


let myAqi = 126

if (myAqi >= 0 && myAqi <= 50){
    console.log('Good!')
}else if (myAqi >= 51 && myAqi <= 100){
    console.log('Moderate!')
}else if (myAqi >= 101 && myAqi <= 150){
    console.log("Unhealthy (Sensitive Groups)") 
}else if (myAqi >= 151 && myAqi <= 200){
    console.log("Unhealthy")
}else if (myAqi >= 201 && myAqi <= 300){
    console.log("Very Unhealthy")
}else{
    console.log("Hazardous")
}