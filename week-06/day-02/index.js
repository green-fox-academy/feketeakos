'use strict';

let king = document.querySelector('#b325');
console.log(king.innerText);

let businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(i => console.log(i.innerText));

let conceitedKing = document.querySelectorAll('.container');
conceitedKing.forEach(i => {
    let splitted = i.innerText.split('\n');
    splitted.forEach(e => alert(e))
});

let noBusiness = document.querySelectorAll('div');
noBusiness.forEach(j => console.log(j.innerText));
