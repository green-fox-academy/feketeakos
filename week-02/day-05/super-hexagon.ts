'use strict';
let canvas = document.querySelector('#canvas').getContext('2d'),side = 0,
    size = 30,
    x = 30,
    y = 30;

canvas.beginPath();
canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

for (side; side < 7; side++) {
    canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
    canvas.strokeStyle = "black";
    canvas.stroke();


/*function hexagon(xstartingPoint: number, ystartingPoint: number) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(xstartingPoint, ystartingPoint);
    ctx.lineTo(xstartingPoint + lineLength, ystartingPoint);
    ctx.lineTo(xstartingPoint + lineLength / 2, ystartingPoint - triangleHeight);
    ctx.lineTo(xstartingPoint, ystartingPoint);
    ctx.stroke();
})*/


/*function lineAtAngle(x1, y1, angle) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(xstartingPoint, ystartingPoint);
    ctx.lineTo(xstartingPoint + lineLength * Math.cos(angle), ystartingPoint +lineLength * Math.sin(angle));
    ctx.stroke();
    ctx.moveTo(xstartingPoint + lineLength * Math.cos(angle), ystartingPoint +lineLength * Math.sin(angle));
    ctx.lineTo(xstartingPoint-10 + lineLength * Math.cos(angle), ystartingPoint - triangleHeight * Math.sin(angle));
}
lineAtAngle(xstartingPoint,ystartingPoint,60);
*/
