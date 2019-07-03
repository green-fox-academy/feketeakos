'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function purpleBox(x: number,y: number) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x,y,20,20)
}
let i: number = 0;
for (i = 0; i<380; i+=20){
    purpleBox(i,i);
} 
