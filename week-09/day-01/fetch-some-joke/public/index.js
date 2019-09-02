'use strict';

const URL = 'http://api.icndb.com/jokes/random';
let container = document.querySelector('div');
let button = document.querySelector('button');
let paragraph = document.createElement('p');

function getJoke() {
    fetch(URL)
        .then(response => response.json())
        .then(myJson =>
            paragraph.innerHTML = `${myJson.value.joke}`);
    container.appendChild(paragraph)
}

button.addEventListener('click', getJoke)