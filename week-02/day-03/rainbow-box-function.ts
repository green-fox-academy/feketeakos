'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function box(size: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
}

let rainbowColors = ['red', 'orange', 'yellow','green','blue','pink', 'black'];

let i: number = 0;
rainbowColors.forEach(function (value) {
    box(400 - 60 * i, value);
    i++;
  });