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