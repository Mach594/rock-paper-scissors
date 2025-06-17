console.log("Hello, World")

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

humanScore = 0
computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++
            return console.log(`you lose. ${computerChoice} beats ${humanChoice}`)
        } else {
            humanScore++
            return console.log(`you win. ${humanChoice} beats ${computerChoice}`)
        } 
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++
            return console.log(`you lose. ${computerChoice} beats ${humanChoice}`)
        } else {
            humanScore++
            return console.log(`you win. ${humanChoice} beats ${computerChoice}`)
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++
            return console.log(`you lose. ${computerChoice} beats ${humanChoice}`)
        } else {
            humanScore++
            return console.log(`you win. ${humanChoice} beats ${computerChoice}`)
        }
    } else {
        return console.log("it is a tie")
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)