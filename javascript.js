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

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.ceil(Math.random() * (3)) -1];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Current round info: It's a tie";
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper"))
    {
        humanScore++;
        return "Current round info: You won the round";
    }
    else
    {
        computerScore++;
        return "Current round info: Computer won the round";
    }

}

function playGame() {

    let result = document.querySelector(".result");
    let total = document.querySelector(".total");

    container.addEventListener('click', (event) => {
        let target = event.target;
        let computerChoice = getComputerChoice();
        switch (target.id) {
            case "rock":
                 humanChoice= "rock";
                break
            case "paper":
                humanChoice = "paper";
                break
            case "scissors":
                humanChoice = "scissors";
                break
        
        }

        result.textContent = playRound(humanChoice, computerChoice);
        
        if (humanScore < 5 && computerScore < 5) {
            total.textContent = `Total Score of the game is you with ${humanScore} and computer with ${computerScore}`;
        }
        else {
            if (humanScore == 5) {
            total.textContent = ` You won with a total result ${humanScore}`;
            }
            else if (computerScore == 5) {
                total.textContent = `Computer won with a total result ${computerScore}`;
            }
            computerScore = 0;
            humanScore = 0;
        }

    })

}

playGame()