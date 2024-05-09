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
let result = document.getElementById("result");
let scoreb = document.getElementById("score-board");
let winRes = document.getElementById("winner");
let computerSelection = getComputerChoice().toString();
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return"Mann wins"
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return "Machine wins"
  }
}

 
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener("click", (e)=>{
  e.stopPropagation()
  getComputerChoice()
  playerSelection= "rock"
  computerSelection = getComputerChoice().toString();
  game()
  
});
paper.addEventListener("click", (e)=>{
  e.stopPropagation()
  getComputerChoice()
  playerSelection= "paper"
  computerSelection = getComputerChoice().toString();
  game()
});
scissors.addEventListener("click", (e)=>{
  e.stopPropagation()
  getComputerChoice()
  playerSelection= "scissors"
  computerSelection = getComputerChoice().toString();
  game()
});

let playerPoints = 0;
let computerPoints = 0;


function game() {
  playRound(playerSelection, computerSelection);

  if (playRound(playerSelection, computerSelection) === "Mann wins") {
    ++playerPoints;
  } else if (
    playRound(playerSelection, computerSelection) === "Machine wins"
  ) {
    ++computerPoints;
  }

  scoreb.innerText= `Mann: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}\, Mann Points: ${playerPoints} Machine: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Machine points: ${computerPoints}`;
 
  if (playerPoints == 5) {
    winRes.innerText="Victory,";
  } else if (computerPoints == 5) {
    winRes.innerText="You failed!"
  }
}
if (playerPoints<5||computerPoints<5){
  for(;;){
if(playerPoints===5||computerPoints===5){break;}
    game()
    
      
    }
}
else{

}
