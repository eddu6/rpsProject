
function getComputerChoice() {
  randomChoice = 0.5 - Math.random();

  if( randomChoice > 0.25){
    return "rock";
  }

  else if(randomChoice >= -.10) {
    return "paper";
  }
  else {
    return "scissors"
  }

     
}

function getPersonChoice(personChoice) {


  if(personChoice == "paper") {
    return "paper";
   }

  else if(personChoice == "rock"){
    return "rock";
  }

  else if(personChoice == "scissors") {
    return "scissors";
  }

  
  else{
    return getPersonChoice();
  }

}

let humanScore = 0;
let computerScore = 0;

function playRound(personChoice) {

  
  let computerChoice = getComputerChoice();


  if(personChoice == computerChoice) {
    console.log(`|Human Choice: ${personChoice}| VERSUS |Computer Choice: ${computerChoice}|
      It's a tie!`);
  }

  else if(personChoice == "paper" && computerChoice == "scissors") {
    computerScore = computerScore + 1;
    console.log(`Human Choice: ${personChoice}| VERSUS |Computer Choice: ${computerChoice}| 
      You Lose! Scissors Beat Paper!`);
  }

  else if(personChoice == "paper" && computerChoice == "rock") {
    humanScore = humanScore + 1;
    console.log(`Human Choice: ${personChoice}| VERSUS |Computer Choice: ${computerChoice}| 
      You Win! Paper Beats Rock!`);
  }

  else if(personChoice == "rock" && computerChoice == "scissors") {
    humanScore = humanScore + 1;
    console.log(`Human Choice: ${personChoice}| VERSUS |Computer Choice: ${computerChoice}| 
      You Win! Rock beats Scissors!`);
  }

  else if(personChoice == "rock" && computerChoice == "paper") {
    computerScore = computerScore + 1;
    console.log(`Human Choice: ${personChoice}| VERSUS |Computer Choice: ${computerChoice}| 
      You Lose! Paper beats Rock!`);
  }

  else if(personChoice == "scissors" && computerChoice == "paper") {
    humanScore = humanScore + 1;
    console.log(`Human Choice: ${personChoice}| VERSUS |Computer Choice: ${computerChoice}| 
      You Win! Scissors Beat Paper!`);
  }

  else if(personChoice == "scissors" && computerChoice == "rock") {
    computerScore = computerScore + 1;
            
    console.log(`Human Choice: ${personChoice}| VERSUS |Computer Choice: ${computerChoice}| 
      You Lose! Rock Beats Scissors`);
  }
  else {
    console.log("Something is wrong with one of the functions if this pops up");
  }
}

function playGame(personChoice){
if(humanScore < 5 && computerScore < 5) {
  playRound(personChoice);
}
else if(humanScore == 5){
console.log("You Won!!");
humanScore = 0;
computerScore = 0;
}

else if(computerScore == 5){
  console.log("You Lost! Boooooo");
  computerScore = 0;
  humanScore = 0;

}

    
   
}

let body = document.querySelector('body');

let scissors = document.createElement('button');
let rock = document.createElement('button');
let paper = document.createElement('button');

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";


body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

rock.addEventListener('click', function() {
  playGame("rock");
  alert(`|HumanScore: ${humanScore}|      |ComputerScore:${computerScore}|`)
} );
paper.addEventListener('click', function() {
  playGame("paper")
  alert(`|HumanScore: ${humanScore}|      |ComputerScore:${computerScore}|`)
} );
scissors.addEventListener('click', function() {
  playGame("scissors")
  alert(`|HumanScore: ${humanScore}|      |ComputerScore:${computerScore}|`)
} );