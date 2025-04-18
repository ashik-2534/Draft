
let player = Math.floor(Math.random() * 3) 
let computer = Math.floor(Math.random() * 3)
let options = ["Rock", "Paper", "Scissors"] // 0 = rock, 1 = paper, 2 = scissors

console.log("Player Picked: " + options[player])
console.log("Computer Picked: " + options[computer])
console.log()
if (player == computer){
    console.log("It's a tie!")
}else if (player == 0 && computer == 2 || player == 1 && computer ==0 || player == 2 && computer == 1){
    console.log("Player wins!")
}else {
    console.log("Computer wins!")
}
