function getComputerSelection() {
  const rps = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random()*3);

  return rps[randomIndex];
}


function getPlayerSelection() {
  let playerSelection = prompt("Rock, paper or scissors");

  playerSelection = playerSelection.trim().toLowerCase();

  if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    return "That's not a valid choice! Try again!";
  } else {
    return playerSelection;
  }
}

function rpsRound(playerSelection, computerSelection) {
  let theHumanWins = false;
  let theComputerWins = false;

  if (playerSelection === computerSelection) {
    message = `It's a tie! It's ${playerSelection} vs ${computerSelection}`;
  
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      message = `The computer wins, ${computerSelection} beats ${playerSelection}!`;
      theComputerWins = true;
    } else if (computerSelection === 'scissors') {
      message = `You win, ${playerSelection} beats ${computerSelection}`;
      theHumanWins = true;
    }
  
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      message = `The computer wins, ${computerSelection} beats ${playerSelection}!`;
      theComputerWins = true;
    } else if (computerSelection === 'rock') {
      message = `You win, ${playerSelection} beats ${computerSelection}`;
      theHumanWins = true;
    }
  
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      message = `The computer wins, ${computerSelection} beats ${playerSelection}!`;
      theComputerWins = true;
    } else if (computerSelection === 'paper') {
      message = `You win, ${playerSelection} beats ${computerSelection}`;
      theHumanWins = true;
    }
  }

  return {message, theHumanWins, theComputerWins};
}

