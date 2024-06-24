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

function getPersonChoice() {

  let personChoice;
  personChoice = prompt("Choose rock, paper, or scissors")
  personChoice = personChoice.toLowerCase();

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

function playRound(personChoice, computerChoice) {

  personChoice = getPersonChoice();
  computerChoice = getComputerChoice();


  if(personChoice == computerChoice) {
    return "It's a tie!";
  }

  else if(personChoice == "paper" && computerChoice == "scissors") {
    computerScore = computerScore + 1;
    return "You Lose! Scissors Beat Paper!";
  }

  else if(personChoice == "paper" && computerChoice == "rock") {
    humanScore = humanScore + 1;
    return "You Win! Paper Beats Rock!";
  }

  else if(personChoice == "rock" && computerChoice == "scissors") {
    humanScore = humanScore + 1;
    return "You Win! Rock beats Scissors!";
  }

  else if(personChoice == "rock" && computerChoice == "paper") {
    computerScore = computerScore + 1;
    return "You Lose! Paper beats Rock!";
  }

  else if(personChoice == "scissors" && computerChoice == "paper") {
    humanScore = humanScore + 1;
    return "You Win! Scissors Beat Paper!";
  }

  else if(personChoice == "scissors" && computerChoice == "rock") {
    computerScore = computerScore + 1;
    return "You Lose! Rock Beats Scissors";
  }
  else {
    return "Something is wrong with one of the functions if this pops up"
  }
}

function playGame(){

    while(humanScore < 5 &&  computerScore < 5) {
        playRound();
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        alert(`|Human Score: ${humanScore}|      |Computer Score: ${computerScore}|`)
        
    }
    
    if(humanScore == 5){
        console.log(humanScore);
        console.log(computerScore);
        return "You Won!! Woooooooooooooo";
    }

    else{
        console.log(humanScore);
        console.log(computerScore);
        return "You Lost! Booooooooo"
    }
   
}

console.log(playGame());