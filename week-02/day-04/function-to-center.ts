'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function singleLine(x: number, y: number) {
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(x,y);
    ctx.lineTo(300,200);
    ctx.stroke();
}
for(let i: number = 0; i <= 600; i+=20){
    singleLine(0+i, 0);
}
for(let i: number = 0; i <= 400; i+=20){
    singleLine(0, 0+i);
}
for(let i: number = 0; i <= 600; i+=20){
    singleLine(0+i, 400);
}
for(let i: number = 0; i <= 400; i+=20){
    singleLine(600, 0+i);
}