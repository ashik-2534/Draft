// The Magic 8 Ball is a popular office toy and children's toy invented in the 1940's for fortune-telling and advice seeking. 🎱

// It's an oversized 8 ball with some of the following answers:

// Yes - definitely.
// It is decidedly so.
// Without a doubt.
// Reply hazy, try again.
// Ask again later.
// Better not tell you now.
// My sources say no.
// Outlook not so good.
// Very doubtful.
// Create a magic8.js program that can respond to any Yes or No questions with a different answer each time it executes.

// The output should have the following format:

// Question:       [Question]
// Magic 8 Ball:   [Answer]

// For example:

// Question:       Is Codédex better than Udemy yet?


let questions = "Is Codédex better than Udemy yet?"

let rndmNum = Math.floor(Math.random() * 9) + 1

if (rndmNum == 1){
    console.log("Yes - definitely.")
}else if (rndmNum == 2){
    console.log("It is decidedly so.")
}else if (rndmNum == 3){
    console.log("Without a doubt.")
}else if (rndmNum == 4){
    console.log("Reply hazy, try again.")
}else if (rndmNum == 5){
    console.log("Ask again later.")
}else if (rndmNum == 6){
    console.log("Better not tell you now.")
}else if (rndmNum == 7){
    console.log("My sources say no.")
}else if (rndmNum == 8){
    console.log("Outlook not so good.")
}else if (rndmNum == 9){
    console.log("Very doubtful.")
}
