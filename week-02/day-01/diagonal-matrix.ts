'use strict';

let matrix: number[][] = [
    [1],
    [1],
    [1],
    [1],
];
let size: number = 10
for(let index = 0; index < size; index++) {
    let row: number[] = []
    for(let inner: number = 0; inner < size; inner++)
    row.push(inner);
    }
    matrix.push(row);
console.log(matrix);