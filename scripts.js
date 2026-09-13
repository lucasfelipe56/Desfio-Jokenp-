const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const drawsScore = document.querySelector("#draws-score")
const humanChoiceImg = document.querySelector('#human-choice')
const machineChoiceImg = document.querySelector('#machine-choice')


let humanScoreNumber = 0
let machineScoreNumber = 0
let drawsScoreNumber = 0

const playHuman = (humanoChoice) => {
    const machineChoice = playMachine() 

    if (humanoChoice === 'rock') {
        humanChoiceImg.innerHTML = '✊'
    } else if (humanoChoice === 'paper') {
        humanChoiceImg.innerHTML = '✋'
    } else if (humanoChoice === 'scissors') {
        humanChoiceImg.innerHTML = '✌️'
    }

    if (machineChoice === 'rock') {
        machineChoiceImg.innerHTML = '✊'
    } else if (machineChoice === 'paper') {
        machineChoiceImg.innerHTML = '✋'
    } else if (machineChoice === 'scissors') {
        machineChoiceImg.innerHTML = '✌️'
    }

    playTheGame(humanoChoice, machineChoice)
}


const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNuber = Math.floor(Math.random() * 3)
    return choices[randomNuber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Deu empate!"
        drawsScoreNumber++
        drawsScore.innerHTML = drawsScoreNumber
    } else if (
        (human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        result.innerHTML = "Você perdeu para Alexa!"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}

const buttonReset = () => {
    drawsScore.innerHTML = 0
    humanScore.innerHTML = 0
    machineScore.innerHTML= 0
    result.innerHTML = " "
    machineChoiceImg.innerHTML = '✋'
    humanChoiceImg.innerHTML = '✋'
}