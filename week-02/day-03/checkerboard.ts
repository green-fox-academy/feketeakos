'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
let size: number = 50;
function blackBox(x: number,y: number) {
    let size: number = 50;
    ctx.fillStyle = 'black';
    ctx.fillRect(x,y,size,size)
}
let i: number = 0;
for (i = 0; i<600; i=i+100){
    blackBox(i,0);
}
for (i = 0; i<600; i=i+100){
    blackBox(0,i);
}

blackBox(0,0);
blackBox(50,50);
//blackBox(i+size,i+size);
