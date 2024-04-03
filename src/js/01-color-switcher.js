const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;


startBtn.addEventListener("click", () => {
 
    startBtn.setAttribute('disabled', false) 

    timerId = setInterval(() => {
        const changeColor = getRandomHexColor();
        body.style.backgroundColor = changeColor;

  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled')
});

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
