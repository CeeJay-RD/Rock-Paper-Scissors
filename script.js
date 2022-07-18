
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

// Variables
const computerSelection = getComputerChoice();
const playerSelection = "rock";


function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return "You Lost! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") {
        return "It's a Tie!"
    } 

};

console.log(playRound(playerSelection, computerSelection));

/*

else {
    return "This result hasn't been defined"
}

*/