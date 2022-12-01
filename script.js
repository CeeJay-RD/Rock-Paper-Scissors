/* 

When a user inputs an option compare with computers selection
If the user wins, give 1 point to the user
If the computer wins, give 1 point to the computer
Loop the round 5 times and print the result of each round with the score
Once the game's finished, print who's the winner and how many point the winner won with

*/



// Array for random answers
const gameAnswers = [
    "rock",
    "paper",
    "scissors"
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
let computerSelection;

// Log
let playerLog = document.querySelector('.player-log');
let computerLog = document.querySelector('.computer-log');


buttons.forEach(button => button.addEventListener('click', () => {

    playerSelection = button.getAttribute('data-id');
    let computerSelection = getComputerChoice();
    selectionLog(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);

})); 

function playRound(playerSelection, computerSelection){

    // Outputs for when the player chooses rock
    
    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        document.querySelector('.computer-score').textContent = computerScore;
        document.getElementById('round-result').textContent = 'You Lost! Paper beats Rock!'
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++
        document.querySelector('.player-score').textContent = playerScore;
        document.getElementById('round-result').textContent = "You Win! Rock breaks Scissors"
    } 
    // Output for when the player chooses paper
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++
        document.querySelector('.player-score').textContent = playerScore;
        document.getElementById('round-result').textContent = "You Won! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        document.querySelector('.computer-score').textContent = computerScore;
        document.getElementById('round-result').textContent = "You Lost! Scissors cut paper"
    } 
    // Output for when the player chooses scissors
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++
        document.querySelector('.player-score').textContent = playerScore;
        document.getElementById('round-result').textContent = "You Won! Scissors cut paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        document.querySelector('.computer-score').textContent = computerScore;
        document.getElementById('round-result').textContent = "You Lost! Rock breaks scissors"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        
    } else if (playerSelection === computerSelection) {
        document.getElementById('round-result').textContent = "It's a Tie!"    
    } else {
        document.getElementById('round-result').textContent = "ERROR"
    }



};

function selectionLog (playerSelection, computerSelection) {

    const logIcon = document.createElement('i');

    if (playerSelection == "rock") {

        logIcon.classList.add('rock', 'log-btn', 'fa-solid', 'fa-hand-fist');
        playerLog.replaceWith(logIcon);

    } else if (playerSelection == "paper") {

        logIcon.classList.add('paper', 'log-btn', 'fa-solid', 'fa-hand');
        playerLog.replaceWith(logIcon);
        


    }
};

//Loop function to play 5 rounds and print the result of each



// function game() {
//     for(let i = 0; i < 5 || playerScore < 5 && computerScore < 5; i++){
//         let computerSelection = getComputerChoice();
//         roundResult.textContent = playRound(playerSelection, computerSelection);
//         console.log("your score = " + playerScore);
//         console.log("Computer's score = " + computerScore);
//     }

//     if(playerScore === 5 && computerScore < 5){
//     console.log("You win the game with" + " " + playerScore + " " + "points")
//     } else if (computerScore === 5 && playerScore < 5) {
//     console.log("The computer won the game with" + " " + computerScore + " " +"points")    
//     } else {
//         console.log("It's a tie!")
//     }

// }


// game();


