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


function playRound(humanChoice, computerChoice) {
    

    if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You Win! Rock Beats Scissors!")
        humanScore = humanScore + 1;
    }

    else if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper Beats Rock!")
        computerScore = computerScore + 1;
    }

    else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lose! Rocks Beats Scissors!")
        computerScore = computerScore + 1;
    }

    else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win! Scissors Beat Rock!")
        humanScore = humanScore + 1;
    }

    else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Win! Paper Beats Rock!")
        humanScore = humanScore + 1;
    }

    else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lose! Scissors Beat Rock!")
        computerScore = computerScore + 1;
    }

    else if(humanChoice == computerChoice) {
        console.log("It's A Tie! Neither Wins")
    
    }


}
    