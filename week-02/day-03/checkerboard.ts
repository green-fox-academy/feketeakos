'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function blackBox(x: number,y: number) {
    let size: number = 50;
    ctx.fillStyle = 'black';
    ctx.fillRect(x,y,size,size)
}
let y: number = 0;

for(let k: number = 0; k < 4; k++) {
    y = k*100

    for (let i: number = 0; i < 8; i++) {
    blackBox(50+i*100,y+50)
    
    for (let j: number = 0; j<600; j=j+100){
    blackBox(j,y);
    
}}} 