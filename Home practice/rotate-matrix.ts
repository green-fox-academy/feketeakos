'use script';

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let index = 1;
matrix.map(row => row[index])

const rotateMatrix = matrix => (
    matrix[0].map((column, index) => (
        matrix.map(row => row[index])
    ))
);

console.log(rotateMatrix(matrix.reverse()))