function getComputerChoice() {
  if (Math.floor(Math.random() * 3) + 1 === 1) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) + 1 === 2) {
    return "scissors";
  } else {
    return "paper";
  }
}
<<<<<<< HEAD





function playRound(playerSelection, computerSelection) {
 
  if (playerSelection === computerSelection) {
    return "It's a draw.";
=======
let playerSelection;
let result = document.getElementById("result");
let scoreb = document.getElementById("score-board");
let winRes = document.getElementById("winner");
let computerSelection = getComputerChoice().toString();
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie"
>>>>>>> rps-ui
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
<<<<<<< HEAD
    return "You win.";
  } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
  (computerSelection === "scissors" && playerSelection === "paper") ||
  (computerSelection === "paper" && playerSelection === "rock")){
    return "Computer wins.";
  } else {
    return "write rock, paper or scissors";
  }
} 
let playerPoints = 0;
let computerPoints = 0;

function game() {

  let playerSelection = prompt("Rock, paper, or scissors").toLowerCase();
 
let computerSelection = getComputerChoice().toString();
 
  playRound(playerSelection, computerSelection)


  if (playRound(playerSelection, computerSelection) === "You win.") {
    ++playerPoints;
  } else if (
    playRound(playerSelection, computerSelection) === "Computer wins."
=======
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
>>>>>>> rps-ui
  ) {
    ++computerPoints;
  }

<<<<<<< HEAD
  console.log("Player:", playerPoints,'    ',"Machine:", computerPoints);
  console.log((playerSelection.charAt(0)).toUpperCase() + playerSelection.slice(1),'           ' , computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1))
  console.log(playRound(playerSelection,computerSelection))
  if (playerPoints == 5) {
    console.log("Congratulations.You win");
  } else if (computerPoints == 5) {
    console.log("Skill issue ngl");
  }
}

=======
  scoreb.innerText= `Mann: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}\, Mann Points: ${playerPoints} Machine: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Machine points: ${computerPoints}`;
 
  if (playerPoints == 5) {
    winRes.innerText="Victory,";
  } else if (computerPoints == 5) {
    winRes.innerText="You failed!"
  }
}
>>>>>>> rps-ui
if (playerPoints<5||computerPoints<5){
  for(;;){
if(playerPoints===5||computerPoints===5){break;}
    game()
    
      
    }
}
else{

}
