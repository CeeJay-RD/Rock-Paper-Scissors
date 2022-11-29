/* 

When a user inputs an option compare with computers selection
If the user wins, give 1 point to the user
If the computer wins, give 1 point to the computer
Loop the round 5 times and print the result of each round with the score
Once the game's finished, print who's the winner and how many point the winner won with

*/



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

// Scores
let playerScore = document.querySelector('.player-score').textContent;
let computerScore = document.querySelector('.computer-score').textContent;
let roundResult = document.getElementById('round-result').textContent;

// Button handlers

const rockBtn = document.getElementsByClassName('.rock');
const paperBtn = document.getElementsByClassName('.paper');
const scissorsBtn = document.getElementsByClassName('.scissors');
const buttons = Array.from(document.querySelectorAll('.btn'));
let playerSelection;
let computerSelection = getComputerChoice();


buttons.forEach(button => button.addEventListener('click', () => {

    playerSelection = button.getAttribute('data-id');
    console.log(playerSelection);

})); 

function playRound(playerSelection, computerSelection){

    // Outputs for when the player chooses rock
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        computerScore++
        return roundResult = 'test'
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        playerScore++
        return "You Win! Rock breaks Scissors"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") {
        return "It's a Tie!"
    } 
    // Output for when the player chooses paper
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        playerScore++
        return "You Won! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        computerScore++
        return "You Lost! Scissors cut paper"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") {
        return "It's a Tie!"
    } 
    // Output for when the player chooses scissors
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        playerScore++
        return "You Won! Scissors cut paper"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        computerScore++
        return "You Lost! Rock breaks scissors"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors") {
        return "It's a Tie!"
    } else {
        prompt("That's not a valid answer")
    }



};

//Loop function to play 5 rounds and print the result of each


function game() {
    for(let i = 0; i < 5 || playerScore < 5 && computerScore < 5; i++){
        let computerSelection = getComputerChoice();
        roundResult.textContent = playRound(playerSelection, computerSelection);
        console.log("your score = " + playerScore);
        console.log("Computer's score = " + computerScore);
    }

    if(playerScore === 5 && computerScore < 5){
    console.log("You win the game with" + " " + playerScore + " " + "points")
    } else if (computerScore === 5 && playerScore < 5) {
    console.log("The computer won the game with" + " " + computerScore + " " +"points")    
    } else {
        console.log("It's a tie!")
    }

}


game();


