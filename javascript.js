function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.ceil(Math.random() * (3)) -1];
}
console.log(getComputerChoice())

function getHumanChoice() {
    let HumanChoice = prompt("Input your choice");
    return HumanChoice;
}

