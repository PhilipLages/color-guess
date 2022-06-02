function createNewTag(tag, element, value) {
  const createTag = document.createElement(tag);
  createTag.setAttribute(element, value);
  return createTag;
}

function createRandomColors(number) {
  const red = Math.floor(Math.random() * number);
  const green = Math.floor(Math.random() * number);
  const blue = Math.floor(Math.random() * number);
  return 'rgb' + `(${red}, ${green}, ${blue})`;
}

const container = document.getElementById('circles-container');

function createCircles() {
  for (let circle = 0; circle < 6; circle += 1) {
    const circles = createNewTag('div', 'class', 'ball');
    circles.style.backgroundColor = createRandomColors(255);
    container.appendChild(circles);
  }
}
createCircles();

const colors = document.getElementsByClassName('ball');
const guessText = document.getElementById('rgb-color');

function writeColorToGuess() {
  const whichColor = Math.floor(Math.random() * 6);
  const randomColor = colors[whichColor];
  guessText.innerText = randomColor.style.backgroundColor;
}
writeColorToGuess();

let acumulador = 0;
let score = document.getElementById('score');
score.innerText  = acumulador;

const answer = document.getElementById('answer');
answer.innerText = 'Escolha uma cor';

function guessTheColor(e) {  
  if (e.target.style.backgroundColor === guessText.innerText) {
    answer.innerText = 'Acertou!';
    acumulador += 3;
    score.innerText = acumulador;
    localStorage.setItem('Score', score.innerText);
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function addColorsEvent() {  
  for (const color of colors) {
    color.addEventListener('click', guessTheColor);
  }
}
addColorsEvent();

function restartGame() {
  answer.innerText = 'Escolha uma cor';
  localStorage.getItem('Score');  
  container.innerHTML = ' ';
  createCircles();
  writeColorToGuess();
  addColorsEvent();
}

function createResetBtn() {
  const resetBtn = document.getElementById('reset-game');
  resetBtn.addEventListener('click', restartGame);
}
createResetBtn();