// A rock, paper, scissors game made in Javascript Console
const choices = ["rock", "paper", "scissors"];
var playerWinCount = 0;
var computerWinCount = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const choice = choices[randomIndex];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerChoice = playerSelection.toLowerCase();

  const playerChoiceIndex = choices.indexOf(playerChoice);
  const computerChoiceIndex = choices.indexOf(computerSelection);

  if (playerChoiceIndex !== -1) {
    // Code to determine winner
    // 0 beats 2, 1 beats 0, 2 beats 1
    if (playerChoiceIndex === 0) {
      if (computerChoiceIndex === 1) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
      }
      if (computerChoiceIndex === 2) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
      }
      if (computerChoiceIndex === 0) {
        return (
          "It's a Tie! You and the computer both selected " + playerSelection
        );
      }
    }
    if (playerChoiceIndex === 1) {
      if (computerChoiceIndex === 2) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
      }
      if (computerChoiceIndex === 0) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
      }
      if (computerChoiceIndex === 1) {
        return (
          "It's a Tie! You and the computer both selected " + playerSelection
        );
      }
    }
    if (playerChoiceIndex === 2) {
      if (computerChoiceIndex === 0) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
      }
      if (computerChoiceIndex === 1) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
      }
      if (computerChoiceIndex === 2) {
        return (
          "It's a Tie! You and the computer both selected " + playerSelection
        );
      }
    }
  }
}

var playerSelection = "";
var computerSelection = "";

function game() {
  while (playerWinCount !== 5 || computerWinCount !== 5) {
    const rockButton = document.querySelector(".rock-btn");
    rockButton.addEventListener("click", () => {
      playerSelection = "rock";
      console.log(playRound(playerSelection, getComputerChoice()));
    });

    const paperButton = document.querySelector(".paper-btn");
    paperButton.addEventListener("click", () => {
      playerSelection = "paper";
      console.log(playRound(playerSelection, getComputerChoice()));
    });

    const scissorsButton = document.querySelector(".scissors-btn");
    scissorsButton.addEventListener("click", () => {
      playerSelection = "scissors";
      console.log(playRound(playerSelection, getComputerChoice()));
    });
  }
};