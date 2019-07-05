'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let xstartingPoint: number = canvas.width - canvas.width;
let ystartingPoint: number = canvas.height;
let lineLength: number = 20;
let triangleHeight: number = (((3 ** (0.5)) / 2) * lineLength);

function triangle(xstartingPoint: number, ystartingPoint: number) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(xstartingPoint, ystartingPoint);
    ctx.lineTo(xstartingPoint + lineLength, ystartingPoint);
    ctx.lineTo(xstartingPoint + lineLength / 2, ystartingPoint - triangleHeight);
    ctx.lineTo(xstartingPoint, ystartingPoint);
    ctx.stroke();
}
for (let j: number = 21; j > 1; j--) {


    for (let k: number = 0; k <= j - 2; k += 1) {
        triangle(xstartingPoint + k * lineLength, ystartingPoint)
    }

    xstartingPoint = xstartingPoint + lineLength / 2;
    ystartingPoint = ystartingPoint - triangleHeight;


}


/*
    for (let n: number = 0; n <= 21; n += 1) {
        triangle(xstartingPoint + n * lineLength / 2, ystartingPoint - k * triangleHeight)
        triangle(xstartingPoint + n * lineLength, ystartingPoint)


    triangle(xstartingPoint + n * lineLength, ystartingPoint+n*triangleHeight);
    triangle(xstartingPoint + n * lineLength/2, ystartingPoint-n*triangleHeight);

}}

function upsideTriangle(xstartingPoint: number, ystartingPoint: number) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(xstartingPoint + lineLength / 2, ystartingPoint - triangleHeight);
    ctx.lineTo(xstartingPoint + lineLength, ystartingPoint);
    ctx.lineTo(xstartingPoint + lineLength * 1.5, ystartingPoint - triangleHeight);
    ctx.lineTo(xstartingPoint + lineLength / 2, ystartingPoint - triangleHeight);
    ctx.stroke();
}


for (let k: number = 0; k <= 21; k += 1) {
    triangle(xstartingPoint + k * lineLength / 2, ystartingPoint - k * triangleHeight);
    upsideTriangle(xstartingPoint + k * lineLength * 0.5, ystartingPoint - k * triangleHeight)


    for (let n: number = 1; n <= 21; n += 1) {
        triangle(xstartingPoint + n * lineLength, ystartingPoint);


        for (let n: number = 1; n <= 20; n += 1) {
            upsideTriangle(xstartingPoint + n * lineLength, ystartingPoint);
        }
    }
}*/