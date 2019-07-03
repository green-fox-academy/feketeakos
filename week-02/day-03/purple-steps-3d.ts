'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function purpleBox(x: number,y: number) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x,y,x+7,y+7)
}
let i: number = 0;
for (i = 0; i<250; i+=i+7){
    purpleBox(i,i);
} 