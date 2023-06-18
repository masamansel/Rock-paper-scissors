function getComputerChoice() {
  if (Math.floor(Math.random() * 3) + 1 === 1) {
    return "rock";
  } else if (Math.floor(Math.random() * 3) + 1 === 2) {
    return "scissors";
  } else {
    return "paper";
  }
}





function playRound(playerSelection, computerSelection) {
 
  if (playerSelection === computerSelection) {
    return "It's a draw.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
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
  ) {
    ++computerPoints;
  }

  console.log("Player:", playerPoints,'    ',"Machine:", computerPoints);
  console.log((playerSelection.charAt(0)).toUpperCase() + playerSelection.slice(1),'           ' , computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1))
  console.log(playRound(playerSelection,computerSelection))
  if (playerPoints == 5) {
    console.log("Congratulations.You win");
  } else if (computerPoints == 5) {
    console.log("Skill issue ngl");
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
