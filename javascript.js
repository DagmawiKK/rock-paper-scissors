function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.ceil(Math.random() * (3)) -1];
}



function getHumanChoice() {
    let HumanChoice = prompt("Input your choice");
    return HumanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice != computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            // humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            // computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            // humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            // computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            // computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            // humanScore++;
            console.log("h win");
        }
    }
}
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();


playRound(computerChoice, humanChoice);