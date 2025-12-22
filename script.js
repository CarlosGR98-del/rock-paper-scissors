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

function playRound(humanChoice) {


    computerChoice = getComputerChoice();

    let roundWinner = getWinner(humanChoice, computerChoice);
    if (roundWinner === "human") {
        output.textContent = "You win!";
        humanScore++
        updateScore();
    }
    else if (roundWinner === "computer") {
        output.textContent = "You lose!";
        computerScore++
        updateScore();
    }
    else if (roundWinner === "Tie") {
        output.textContent = "It's a tie!";
    }
}

function updateScore() {
    if (humanScore != 3 && computerScore != 3) {
        score.textContent = "Your score: " + humanScore + "\nComputer score: " + computerScore;
    }
    if (humanScore === 3) {
        score.textContent = "Congratulation!! You won the game";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 3) {
        score.textContent = "Game over! Computer won";
        humanScore = 0;
        computerScore = 0;
    }
}

let humanScore = 0
let computerScore = 0

const score = document.querySelector(".score");
const output = document.querySelector(".output");
const btnEleccion = document.querySelectorAll("button");

btnEleccion.forEach((button) => {
    button.addEventListener("click", (event) => {
        humanChoice = event.target.value;
        playRound(humanChoice);
    });
});
