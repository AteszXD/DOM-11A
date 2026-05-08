const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let currentHole = null;
let gameTimer = null;
let moleTimer = null;
let timeLeft = 30;
let moleSpeed = 1000;

function randomHole() {
  holes.forEach(hole => {
    hole.innerHTML = "";  
  });

  const randomIndex = Math.floor(Math.random() * holes.length);
  const hole = holes[randomIndex];
  hole.innerHTML = `<div class="mole">🐹</div>`;
  currentHole = hole;
}

function startGame() {
  score = 0;
  timeLeft = 30;
  moleSpeed = 1000;

  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  clearInterval(gameTimer);
  clearInterval(moleTimer);

  randomHole();

  moleTimer = setInterval(() => {
    randomHole();
  }, moleSpeed);

  gameTimer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (score >= 5 && moleSpeed > 700) increaseDifficulty(700);
    if (score >= 10 && moleSpeed > 500) increaseDifficulty(500);
    if (score >= 15 && moleSpeed > 350) increaseDifficulty(350);
    if (timeLeft <= 0) endGame();

  }, 1000);
}