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

//modal
let modal = document.querySelector('.endgamemodal');
let modalHeader = document.getElementById('modalheader');
let modalTip = document.getElementById('modaltip')


buttons.forEach(button => button.addEventListener('click', () => {



    playerSelection = button.getAttribute('data-id');
    let computerSelection = getComputerChoice();
    clearLog();
    selectionLog(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    if(isGameOver()) {
        openModal();
        defineWinner();
    };


})); 

function playRound(playerSelection, computerSelection){

    const logIcon = document.createElement('i');
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
    
    if (playerSelection == "rock") {
        playerLog.classList.add('rock', 'log-btn', 'fa-solid', 'fa-hand-fist');
    } else if (playerSelection == "paper") {
        playerLog.classList.add('paper', 'log-btn', 'fa-solid', 'fa-hand');
    } else if (playerSelection == "scissors") {
        playerLog.classList.add('scissors', 'log-btn', 'fa-solid', 'fa-hand-scissors');        
    }

    if (computerSelection == "rock") {
        computerLog.classList.add('rock', 'log-btn', 'fa-solid', 'fa-hand-fist');
    } else if (computerSelection == "paper") {
        computerLog.classList.add('paper', 'log-btn', 'fa-solid', 'fa-hand');
    } else if (computerSelection == "scissors") {
        computerLog.classList.add('scissors', 'log-btn', 'fa-solid', 'fa-hand-scissors');        
    }



};

function clearLog() {
    playerLog.className = '';
    playerLog.textContent = '';
    computerLog.className = '';
    computerLog.textContent = '';
};


function isGameOver() {
    return playerScore === 5 || computerScore === 5
};

function openModal() {
    modal.setAttribute('id', 'endgamemodalactive')

};

function defineWinner() {
    if (playerScore === 5) {
        modalHeader.textContent = 'You win!'
        modalTip.textContent = 'The machine probably wants a rematch'
    } else if (computerScore === 5) {
        modalHeader.textContent = 'You Lost!'
        modalTip.textContent = 'Feel free to try again if you think yo can do better!'
    }
};

function refreshPage(){
    window.location.reload();
};



