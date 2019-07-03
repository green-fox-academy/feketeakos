'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function rectangle(x: number, y: number, a: number, b: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, a, b)
}
rectangle(100, 100, 200, 300, 'black');
rectangle(320, 241, 20, 31, 'orange');
rectangle(210, 130, 400, 50, 'red');
rectangle(0, 50, 200, 100, 'yellow');

