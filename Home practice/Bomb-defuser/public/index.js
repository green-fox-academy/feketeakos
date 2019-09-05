'use strict';
let bomb = document.getElementsByClassName('bomb')[0]
let startButton = document.getElementsByClassName('start')[0];
let defuseButton = document.getElementsByClassName('defuse')[0];
let timeField = document.getElementsByClassName('timer')[0];
let img = document.createElement("img");
let timer = 11;
let myInterval;

function counter() {
    if (timer > 0) {
        timer--;
        timeField.textContent = `Time remaining: ${timer} sec`;
    }
    if (timer === 0) {
        timeField.textContent = 'The World has exploded! Kim Jong Un likes this.'
        img.src = 'https://media.giphy.com/media/l3vR1tookIhM8nZJu/giphy.gif';
        img.height = 200;
        img.width = 300;
        bomb.appendChild(img);
    }
}

function start() {
    clearInterval(myInterval);
    myInterval = setInterval(counter, 1000);
    timer = 11;
    img.src = 'https://media.giphy.com/media/l0MYz5mGpy0vLGnbW/giphy.gif';
    img.height = 200;
    img.width = 300;
    bomb.appendChild(img);
    startButton.textContent = 'RESTART'
}

function defuse() {
    timeField.textContent = 'Oooh, that was hot! Congrats!';
    clearInterval(myInterval);
    img.src = 'https://media.giphy.com/media/4UEyopJPeJEze/giphy.gif';
    img.height = 200;
    img.width = 300;
    bomb.replaceChild(img, img);
    timer = 11;
}

startButton.addEventListener('click', start)
defuseButton.addEventListener('click', defuse);
