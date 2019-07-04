'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
let greyRGBs: string[] = ['rgb(220,220,220)', 'rgb(211,211,211)', 'rgb(192,192,192)', 'rgb(169,169,169)', 'rgb(128,128,128)', 'rgb(105,105,105)', 'rgb(112,128,144)'];

function littleStar(x: number, y: number, size: number) {
    ctx.fillStyle = greyRGBs[Math.floor(Math.random() * 7)];
    ctx.fillRect(x, y, size, size)
    ctx.rotate(Math.PI / 45)
}
for (let i: number = 0; i < 100; i+=1/10) {
    littleStar(Math.random() * 100 * i, Math.random() *100 * i, 5);
}
