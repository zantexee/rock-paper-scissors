function computerPlay() {
  const picks = ["rock", "paper", "scissors"];
  const computerPicked = Math.floor(Math.random() * picks.length);
  return picks[computerPicked];
}

function capitalizeOne(strArg) {
  const newStr = strArg.charAt(0).toUpperCase() + strArg.slice(1);
  return newStr;
}

function playRound(playerSelection, computerSelection) {
  let playerWins = true;

  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection)
    return `It's a draw! You both chose ${capitalizeOne(playerSelection)}`;
  if (playerSelection === "rock") {
    playerWins = computerSelection === "paper" ? false : true;
  } else if (playerSelection === "paper") {
    playerWins = computerSelection === "scissors" ? false : true;
  } else if (playerSelection === "scissors") {
    playerWins = computerSelection === "rock" ? false : true;
  } else window.alert("Your selection is invalid.");

  if (playerWins)
    return `You win! ${capitalizeOne(playerSelection)} beats ${capitalizeOne(
      computerSelection
    )}`;
  return `You lose! ${capitalizeOne(computerSelection)} beats ${capitalizeOne(
    playerSelection
  )}.`;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
