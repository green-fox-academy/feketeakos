'use strict';
let bomb = document.getElementsByClassName('bomb')[0]
let startButton = document.getElementsByClassName('start')[0];
let defuseButton = document.getElementsByClassName('defuse')[0];
let timeField = document.getElementsByClassName('timer')[0];
let img = document.createElement("img");
let timer = 11;

function counter() {
    if (timer > 0) {
        timer--;
        timeField.textContent = `Time remaining: ${timer} sec`;
    }
    if (timer === 0) {
        img.src = 'https://media.giphy.com/media/l3vR1tookIhM8nZJu/giphy.gif';
        img.height = 200;
        img.width = 300;
        bomb.appendChild(img);
    }
}

function start() {
    timer = 11;
    setInterval(function () { 
        counter() 
    }, 1000);
    img.src = 'https://media.giphy.com/media/l0MYz5mGpy0vLGnbW/giphy.gif';
    img.height = 200;
    img.width = 300;
    bomb.appendChild(img);


}
function defuse() {
    img.src = 'https://media.giphy.com/media/4UEyopJPeJEze/giphy.gif';
    img.height = 200;
    img.width = 300;
    bomb.removeChild(img);
    bomb.appendChild(img);
    clearInterval()
}


startButton.addEventListener('click', start)
defuseButton.addEventListener('click', defuse);
