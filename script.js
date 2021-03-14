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

function game(playFunction) {
  let playerScore = 0;
  let computerScore = 0;
  let validStrings = ["rock", "paper", "scissors"];
  let invalidInput = false;
  for (let i = 0; i < 5; i++) {
    if (invalidInput) i--;
    const computerSelection = computerPlay();
    const playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
    if (validStrings.includes(playerSelection)) {
      const result = playFunction(playerSelection, computerSelection);

      if (result.includes("You win!")) {
        console.log(result);
        playerScore++;
      } else if (result.includes("You lose!")) {
        console.log(result);
        computerScore++;
      } else if (result.includes("draw!")) {
        console.log(result);
      }
      console.log("Computer:", computerScore);
      console.log("Player", playerScore);
      invalidInput = false;
    } else {
      console.log("Invalid pick.");
      invalidInput = true;
    }
  }
  if (playerScore > computerScore) return console.log("The player wins!");
  else if (computerScore > playerScore)
    return console.log("The computer wins!");
  return console.log("It's a draw!");
}

game(playRound);
