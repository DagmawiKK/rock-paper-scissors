function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.ceil(Math.random() * (3)) -1];
}

function getHumanChoice() {
    let HumanChoice = prompt("Input your choice");
    console.log(HumanChoice)
    return HumanChoice.toLowerCase().trim();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice != computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
        }
    }
}

function playGame() {
    let i = 5;

    while (i > 0) {
        let computerChoice = getComputerChoice();
        
        let humanChoice = getHumanChoice();
        alert("------Current score------");
        alert("Computer: " + computerScore);
        alert("Human: " + humanScore );
        alert("computer played: " + computerChoice);

        playRound(computerChoice, humanChoice);
        i--;
    } 

    if (humanScore > computerScore) {
        alert("The human won with value: " + humanScore);
        return; 
    }
    else {
        alert("The computer won with value: " + computerScore);
        return;
    }
}

playGame()