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
        let choice = prompt("Choose rock, paper, or scissors");
    
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
        alert("Enter answer in all lowercase letters and ensure there are no spelling mistakes");
    }

    counter--;
    }

    }

    