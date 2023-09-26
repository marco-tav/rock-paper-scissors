/* --------- FUNCTION DECLARATIONS --------- */

function getComputerSelection() {
  const rps = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random()*3);

  return rps[randomIndex];
}

function getPlayerSelection() {
  let playerSelection = prompt("Rock, paper or scissors?");

  playerSelection = playerSelection.trim().toLowerCase();

  if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    return "That's not a valid choice! Try again!";
  } else {
    return playerSelection;
  }
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let {message, pScore, cScore} = playRound(getPlayerSelection(), getComputerSelection());

    playerScore += pScore;
    computerScore += cScore;

    console.log(message);
  }

  if (playerScore === computerScore) {
    console.log(`It's a tie ${playerScore} to ${computerScore}`);
  } else if (playerScore > computerScore) {
    console.log(`You won ${playerScore} to ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lost ${playerScore} to ${computerScore}`);
  }

  return {playerScore, computerScore};
}


/* ------------- MAIN PROGRAM -------------- */

const rpsButtons = document.querySelectorAll('.game-button');
const messageBoard = document.querySelector('.messageboard');
const playerScoreboard = document.querySelector('.player');
const computerScoreboard = document.querySelector('.computer');

let playerScore = 0;
let computerScore = 0;
let finalMessage;

rpsButtons.forEach(button => button.addEventListener('click', (e) => {

  let {message, pScore, cScore} = playRound(button.textContent, getComputerSelection());
  
  playerScore += pScore;
  computerScore += cScore;

  messageBoard.textContent = message;

  playerScoreboard.textContent = playerScore;
  computerScoreboard.textContent = computerScore;

  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreboard.textContent = 0;
  }

  if (playerScore === 5) {
    finalMessage = `You win this match ${playerScore} to ${computerScore}`;
    messageBoard.textContent = finalMessage;
  } else if (computerScore === 5) {
    finalMessage = `You lose this match ${playerScore} to ${computerScore}`;
    messageBoard.textContent = finalMessage;
  }
}))



