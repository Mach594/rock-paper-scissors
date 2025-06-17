function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "scissors"
    } else if (randomNumber === 2) {
        return "rock"
    } else {
        return "paper"
    }
}

function getHumanChoice() {
    humanChoice = prompt("Pick rock, paper, scissors: ")
    return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    // It's a tie if both choices are the same
    if (humanChoice === computerChoice) {
        return console.log("it is a tie")
    }

    // Human picks rock
    if (humanChoice === "rock") {

        // Computer picks paper and wins. Computer score goes up 1.
        if (computerChoice === "paper") {
            computerScore++
            return console.log(`you lose. ${computerChoice} beats ${humanChoice}`)

        // Computer loses and humans gets 1 point.
        } else {
            humanScore++
            return console.log(`you win. ${humanChoice} beats ${computerChoice}`)
        } 
    
    // Human picks scissors
    } else if (humanChoice === "scissors") {

        // Computer chooses rock and wins. Score goes up 1.
        if (computerChoice === "rock") {
            computerScore++
            return console.log(`you lose. ${computerChoice} beats ${humanChoice}`)

        // Human wins and gets 1 point.
        } else {
            humanScore++
            return console.log(`you win. ${humanChoice} beats ${computerChoice}`)
        }

    // Human picks paper
    } else if (humanChoice === "paper") {

        // Computer picks scissors and wins 1 point.
        if (computerChoice === "scissors") {
            computerScore++
            return console.log(`you lose. ${computerChoice} beats ${humanChoice}`)

        // Human wins a point.
        } else {
            humanScore++
            return console.log(`you win. ${humanChoice} beats ${computerChoice}`)
        }
    } 
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()



function playGame() {
    humanScore = 0
    computerScore = 0

    while (humanScore + computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`human: ${humanScore}`, `computer: ${computerScore}`)
}

playGame()