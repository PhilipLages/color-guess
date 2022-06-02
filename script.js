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
    const createCircles = container.appendChild(createNewTag('div', 'class', 'ball'))
    createCircles.style.backgroundColor = createRandomColors(255);    
  } 
}
createCircles();