// A rock, paper, scissors game made in Javascript Console
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    return choice;
}

console.log(getComputerChoice());