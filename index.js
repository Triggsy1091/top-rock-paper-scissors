// A rock, paper, scissors game
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

const domPlayerWins = document.querySelector("#playerWinCount");
const domComputerWins = document.querySelector("#computerWinCount");
const outcome = document.querySelector("#outcome");

function updateScore(result) {
  if (result.includes("You Win!")) {
    playerWinCount++;
  } else if (result.includes("You Lose!")) {
    computerWinCount++;
  }

  domPlayerWins.textContent = playerWinCount;

  domComputerWins.textContent = computerWinCount;

  outcome.textContent = result;
}

let playerSelection = "";

function game() {
  const rockButton = document.querySelector(".rock-btn");
  const paperButton = document.querySelector(".paper-btn");
  const scissorsButton = document.querySelector(".scissors-btn");

  function resetGame() {
    playerSelection = "";
    playerWinCount = 0;
    computerWinCount = 0;

    domPlayerWins.textContent = playerWinCount;

    domComputerWins.textContent = computerWinCount;
  }

  function playGameRound() {
    playerSelection = this.getAttribute("data-choice");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    updateScore(result);

    console.log(result);
    console.log("Player Wins: " + playerWinCount);
    console.log("Computer Wins: " + computerWinCount);

    if (playerWinCount === 5 || computerWinCount === 5) {
      console.log("Game Over!");
      
      if (playerWinCount > computerWinCount) {
        outcome.textContent = 'Congratulations, You Won!';
      } else if (computerWinCount > playerWinCount) {
        outcome.textContent = 'You Lose!';
      }

      resetGame();
    }
  }

  rockButton.addEventListener("click", playGameRound);
  paperButton.addEventListener("click", playGameRound);
  scissorsButton.addEventListener("click", playGameRound);
}

game();