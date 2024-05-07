function getComputerChoice() {
  if (Math.floor(Math.random() * 3) + 1 === 1) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) + 1 === 2) {
    return "scissors";
  } else {
    return "paper";
  }
}
let playerSelection;

let computerSelection = getComputerChoice().toString();
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("tie");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    console.log("Mann wins");
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    console.log("Machine wins");
  }
}

playerSelection="rock";
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener("click", (e)=>{
  e.stopPropagation()
  getComputerChoice()
  computerSelection = getComputerChoice().toString();
  playRound(playerSelection, computerSelection)
  
});
paper.addEventListener("click", (e)=>{
  e.stopPropagation()
  getComputerChoice()
  computerSelection = getComputerChoice().toString();
  playRound(playerSelection, computerSelection)
});
scissors.addEventListener("click", (e)=>{
  e.stopPropagation()
  getComputerChoice()
  computerSelection = getComputerChoice().toString();
  playRound(playerSelection, computerSelection)
});

let playerPoints = 0;
let computerPoints = 0;


function game() {
  playRound(playerSelection, computerSelection);

  if (playRound(playerSelection, computerSelection) === "You win.") {
    ++playerPoints;
  } else if (
    playRound(playerSelection, computerSelection) === "Computer wins."
  ) {
    ++computerPoints;
  }

  console.log("Player:", playerPoints, "    ", "Machine:", computerPoints);
  console.log(
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1),
    "           ",
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
  );
  console.log(playRound(playerSelection, computerSelection));
  if (playerPoints == 5) {
    console.log("Congratulations.You win");
  } else if (computerPoints == 5) {
    console.log("Skill issue ngl");
  }
}
