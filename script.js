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

humanScore = 0;
computerScore = 0;

function getScore() {
    const aPara = document.createElement("p");
    aPara.textContent = `human: ${humanScore} computer: ${computerScore}`;
    playLog.appendChild(aPara);

    
    if (humanScore >= 5) {        
        const cPara = document.createElement("p");
        playLog.append(cPara);
        cPara.textContent = `Game Over!! Human beat computer.`
    }
    if (computerScore >= 5) {        
        const cPara = document.createElement("p");
        playLog.append(cPara);
        cPara.textContent = `Game Over!! Computer beat human.`
}};

// function getHumanChoice() {
//     humanChoice = prompt("Pick rock, paper, scissors: ")
//     return humanChoice.toLowerCase()
// }

function playRound(humanChoice, computerChoice=getComputerChoice()) {
    

    // It's a tie if both choices are the same
    const bPara = document.createElement("p")
    playLog.appendChild(bPara)
    if (humanChoice === computerChoice) {
        return bPara.textContent = `it is a tie @ ${humanChoice}`
    }

    // Human picks rock
    if (humanChoice === "rock") {

        // Computer picks paper and wins. Computer score goes up 1.
        if (computerChoice === "paper") {
            computerScore++
            return bPara.textContent = `you lose. ${computerChoice} beats ${humanChoice}`

        // Computer loses and humans gets 1 point.
        } else {
            humanScore++
            return bPara.textContent = `you win. ${humanChoice} beats ${computerChoice}`
        } 
    
    // Human picks scissors
    } else if (humanChoice === "scissors") {

        // Computer chooses rock and wins. Score goes up 1.
        if (computerChoice === "rock") {
            computerScore++
            return bPara.textContent = `you lose. ${computerChoice} beats ${humanChoice}`

        // Human wins and gets 1 point.
        } else {
            humanScore++
            return bPara.textContent = `you win. ${humanChoice} beats ${computerChoice}`
        }

    // Human picks paper
    } else if (humanChoice === "paper") {

        // Computer picks scissors and wins 1 point.
        if (computerChoice === "scissors") {
            computerScore++
            return bPara.textContent = `you lose. ${computerChoice} beats ${humanChoice}`

        // Human wins a point.
        } else {
            humanScore++
            return bPara.textContent = `you win. ${humanChoice} beats ${computerChoice}`
        }
    } 
}

// function playGame(humanSelection) {
//     humanScore = 0
//     computerScore = 0

//     while (humanScore + computerScore < 5) {
//         console.log(`human: ${humanScore}`, `computer: ${computerScore}`);
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);

//     }
//     console.log(`Game Over - human: ${humanScore}`, `computer: ${computerScore}`)
// }


var btnScissors = document.createElement("button");
var btnRock = document.createElement("button");
var btnPaper = document.createElement("button");

btnScissors.className = "scissors";
btnRock.className = "rock";
btnPaper.className = "paper";

const body = document.querySelector("body");
const newDiv = document.createElement("div");

const newTitle = document.createElement("h1");
body.appendChild(newTitle);
newTitle.textContent = "Rock, Paper, or Scissors?";
newTitle.style.textAlign = "center";

body.appendChild(newDiv);

newDiv.appendChild(btnPaper);
newDiv.appendChild(btnScissors);
newDiv.appendChild(btnRock);

btnPaper.setAttribute("style", "color: white; background-color: black;")
btnPaper.textContent = "Choose Paper";

btnScissors.setAttribute("style", "color: white; background-color: black;")
btnScissors.textContent = "Choose Scissors";

btnRock.setAttribute("style", "color: white; background-color: black;")
btnRock.textContent = "Choose Rock";

newDiv.style.display = "flex";
newDiv.style.gap = "20px";
newDiv.style.justifyContent = "center";

const btnRockSelect = document.querySelector(".rock");
const btnScissorsSelect = document.querySelector(".scissors");
const btnPaperSelect = document.querySelector(".paper");

btnScissorsSelect.addEventListener("click", playScissors);
btnRockSelect.addEventListener("click", playRock);
btnPaperSelect.addEventListener("click", playPaper);

function playScissors() {
    playRound("scissors");
    getScore();
};

function playRock() {
    playRound("rock");
    getScore();
};

function playPaper() {
    playRound("paper");
    getScore();
};

// Making the play log
const playLog = document.createElement("div");
body.appendChild(playLog)
playLog.setAttribute("style", "text-align: center;")