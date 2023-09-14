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

