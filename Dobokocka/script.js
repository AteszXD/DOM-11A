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

function updateScore() {
    score1Element.textContent = player1Score;
    score2Element.textContent = player2Score;
}

function resetScores() {
    player1Score = 0;
    player2Score = 0;
    updateScore();
    resultElement.innerHTML = '🔄 Pontok lenullázva! Új játék kezdődhet! 🔄';
    dice1.src = 'kepek/1.png';
    dice2.src = 'kepek/1.png';
    resultElement.style.background = '#f0f0f0';
    resultElement.style.color = '#333';
}

function determineWinner(roll1, roll2) {
    if (roll1 > roll2) {
        player1Score++;
        updateScore();
        return `🎉 Játékos 1 nyert! (${roll1} - ${roll2}) 🎉`;
    } else if (roll2 > roll1) {
        player2Score++;
        updateScore();
        return `🎉 Játékos 2 nyert! (${roll2} - ${roll1}) 🎉`;
    } else {
        return `🤝 Döntetlen! (${roll1} - ${roll2}) 🤝`;
    }
}