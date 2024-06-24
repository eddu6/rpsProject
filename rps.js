function getComputerChoice () {
randomChoice = 0.5 - Math.random();

if( randomChoice > 0.25){
    return "Rock";
}

else if(randomChoice < 0) {
    return "Paper";
}
else {
    return "Scissors"
}

     
}

function getPersonChoice () {

let counter = 0;


    while(counter <= 0){
        let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    
    if( choice == "rock"){
        return "Rock";
    }
    
    else if(choice == "paper") {
        return "Paper";
    }

    else if(choice == "scissors"){
        return "Scissors"
    }

    else {
        alert("Ensure there are no spelling mistakes");
    }

    counter--;
    }

    }

let humanScore = 0;
let computerScore = 0;


function playRound(getPersonChoice, getComputerChoice) {

   

    if(getPersonChoice == "rock" && getComputerChoice == "scissors") {
        console.log("You Win! Rock Beats Scissors!")
        return humanScore = humanScore + 1;
    }

    else if(getPersonChoice == "rock" && getComputerChoice == "paper") {
        console.log("You Lose! Paper Beats Rock!")
        return computerScore = computerScore + 1;
    }

    else if(getPersonChoice == "scissors" && getComputerChoice == "rock") {
        console.log("You Lose! Rocks Beats Scissors!")
        return computerScore = computerScore + 1;
    }

    else if(getPersonChoice == "scissors" && getComputerChoice == "paper") {
        console.log("You Win! Scissors Beat Rock!")
        return humanScore = humanScore + 1;
    }

    else if(getPersonChoice == "paper" && getComputerChoice == "rock") {
        console.log("You Win! Paper Beats Rock!")
        return humanScore = humanScore + 1;
    }

    else if(getPersonChoice == "paper" && getComputerChoice == "scissors") {
        console.log("You Lose! Scissors Beat Rock!")
        return computerScore = computerScore + 1;
    }

    else if(getComputerChoice == getComputerChoice) {
        return console.log("It's A Tie! Neither Wins")
    
    }


}

function playGame(){

    while(humanScore < 5 && computerScore < 5){
        console.log(playRound());
    
    if(humanScore == 5){
        alert("Congratulations! You Won!");

        humanScore = 0;
        computerScore = 0;
    }

    else if(computerScore == 5){
        alert("You Lose! Booooo");

        humanScore = 0;
        computerScore = 0;
    }
    }
    
}
    