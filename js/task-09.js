const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');


console.log(getRandomHexColor())
btn.addEventListener('click', onChangeColor)

function onChangeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  text.textContent = randomColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

