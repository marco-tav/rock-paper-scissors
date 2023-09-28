/* --------- FUNCTION DECLARATIONS --------- */

function getComputerSelection() {
  const rps = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random()*3);

  return rps[randomIndex];
}


function playRound(playerSelection, computerSelection) {
  let pScore = 0;
  let cScore = 0;

  if (playerSelection === computerSelection) {
    message = `It's a tie! It's ${playerSelection} vs ${computerSelection}`;
  
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      message = `The computer wins, ${computerSelection} beats ${playerSelection}!`;
      cScore++;
    } else if (computerSelection === 'scissors') {
      message = `You win, ${playerSelection} beats ${computerSelection}!`;
      pScore++;
    }
  
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      message = `The computer wins, ${computerSelection} beats ${playerSelection}!`;
      cScore++;
    } else if (computerSelection === 'rock') {
      message = `You win, ${playerSelection} beats ${computerSelection}!`;
      pScore++;
    }
  
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      message = `The computer wins, ${computerSelection} beats ${playerSelection}!`;
      cScore++;
    } else if (computerSelection === 'paper') {
      message = `You win, ${playerSelection} beats ${computerSelection}!`;
      pScore++;
    }
  }

  return {message, pScore, cScore};
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreboard.textContent = 0;
  computerScoreboard.textContent = 0;
  messageBoard.textContent = "Let's play rock-paper-scissors! First to 5 wins! To start again use reset score button or keep playing!";
}

function playGame(event) {

  let {message, pScore, cScore} = playRound(event.srcElement.textContent, getComputerSelection());
  
  playerScore += pScore;
  computerScore += cScore;

  messageBoard.textContent = message;

  playerScoreboard.textContent = playerScore;
  computerScoreboard.textContent = computerScore;

  if (playerScore === 5) {
    finalMessage = `You win this match ${playerScore} to ${computerScore}`;
    messageBoard.textContent = finalMessage;
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    finalMessage = `You lose this match ${playerScore} to ${computerScore}`;
    messageBoard.textContent = finalMessage;
    playerScore = 0;
    computerScore = 0;
  }
}

/* ------------- MAIN PROGRAM -------------- */

const rpsButtons = document.querySelectorAll('.game-button');
const messageBoard = document.querySelector('.messageboard');
const playerScoreboard = document.querySelector('.player');
const computerScoreboard = document.querySelector('.computer');
const playAgainButton = document.querySelector("#play-again");

let playerScore = 0;
let computerScore = 0;

rpsButtons.forEach(button => button.addEventListener('click', playGame));

playAgainButton.addEventListener('click', resetGame);



