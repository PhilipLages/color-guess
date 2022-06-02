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

const container = document.querySelector('.container');
function createCircles() {
  for (let circle = 0; circle < 6; circle += 1) {
    const circles = container.appendChild(createNewTag('div', 'class', 'ball'))
    circles.style.backgroundColor = createRandomColors(255);    
  } 
}
createCircles();

const colors = document.querySelectorAll('.ball');

const guessText = document.getElementById('rgb-color');
function writeColorToGuess () {
  for (let color of colors) {
    guessText.innerText = color.style.backgroundColor;
    // break;
  }  
  }
writeColorToGuess();

const answer = document.getElementById('answer');
window.onload = function() {
  answer.appendChild(createNewTag('h2', 'id', 'answer'));
  answer.innerText = "Escolha uma cor";
}

function guessTheColor(e) {  
  if (e.target.style.backgroundColor === guessText.innerText) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = "Errou! Tente novamente!";
  }  
}

function addBallsEvent() {
  for (let ball of colors) {
    ball.addEventListener('click', guessTheColor);
  }
}
addBallsEvent();

function createResetBtn () {
  container.appendChild(createNewTag('button', 'id', 'reset-game'));
  const resetBtn = document.getElementById('reset-game');
  resetBtn.innerText = 'iniciar/reiniciar';
  resetBtn.addEventListener('click', function() {
    window.location.reload();
  })
}
createResetBtn();