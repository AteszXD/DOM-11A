const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const score1Element = document.getElementById('score1');
const score2Element = document.getElementById('score2');
const resultElement = document.getElementById('result');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

let player1Score = 0;
let player2Score = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(diceElement, number) {
    diceElement.src = `kepek/${number}.png`;
    diceElement.alt = `Dobás eredménye: ${number}`;
}