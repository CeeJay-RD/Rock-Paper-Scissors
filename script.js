
// Array for random answers
const gameAnswers = [
    "Rock",
    "Paper",
    "Scissors"
];


// Fuction to generate a random answer
function getComputerChoice() {
    return gameAnswers[Math.floor(Math.random()* gameAnswers.length)]
};

function getPlayerChoice() {
    return prompt("What's your choice?")
};

// Variables
const computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice()

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return "You Lost! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") {
        return "It's a Tie!"
    } 
};

function game() {
    for (let i = 0; i < 5; i++) {
       
    } 
}

game();