console.log("Hello, World")

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return console.log("scissors")
    } else if (randomNumber === 2) {
        return console.log("rock")
    } else {
        return console.log("paper")
    }
}


getComputerChoice()