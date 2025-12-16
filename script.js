function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNumber === 0) {
        computerChoice = "rock";
    }
    else if (randomNumber === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = window.prompt();
    humanChoice = String(humanChoice).toLowerCase();

    return humanChoice;
}

function getWinner(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        return "Tie"
    }
    else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    return "computer"
                } else {
                    return "human"
                }
            case "paper":
                if (computerChoice === "scissors") {
                    return "computer"
                } else {
                    return "human"
                }
            case "scissors":
                if (computerChoice === "rock") {
                    return "computer"
                } else {
                    return "human"
                }
            default:
                return "Error"
        }
    }
}

function playRound() {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    let roundWinner = getWinner(humanChoice, computerChoice);
    if (roundWinner === "human") {
        console.log("You win!");
        humanScore++;
    }
    else if (roundWinner === "computer") {
        console.log("You lose!");
        computerScore++;
    }
    else if (roundWinner === "Tie") {
        console.log("It's a tie!")
    }
}

function playGame() {
    while (humanScore != 3 && computerScore != 3) {
        playRound()
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    if (humanScore === 3){
        console.log("Congratulation!! You won the game")
    }
    else if (computerScore === 3){
        console.log("Game over! Computer won")
    }
}

let humanScore = 0
let computerScore = 0

playGame()