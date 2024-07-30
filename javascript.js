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


        let computerChoice = getComputerChoice();

        let container = document.querySelector(".container");

        let rock = document.createElement("button");
        let paper = document.createElement("button");
        let scissors = document.createElement("button");

        rock.textContent = "rock";
        paper.textContent = "paper";
        scissors.textContent = "scissors";

        rock.id = "rock";
        paper.id = "paper";
        scissors.id = "scissors";

        container.appendChild(rock);
        container.appendChild(paper);
        container.appendChild(scissors);

        container.addEventListener('click', (event) => {
            let target = event.target;

            switch (target.id) {
                case "rock":
                    playRound(computerChoice, "rock");
                    break
                case "paper":
                    playRound(computerChoice, "paper");
                    break
                case "scissors":
                    playRound(computerChoice, "scissors");
                    break
            }
        })



        
        let humanChoice = getHumanChoice();
        alert("computer played: " + computerChoice);
        alert("Current score is Computer: " + computerScore + " Human: " + humanScore);   

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