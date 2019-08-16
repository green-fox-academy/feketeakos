'use strict';


let matrix: number[][] = [
    [1, 3, 6, 2],
    [7, 5, 6, 1],
    [3, 3, 1, 5],
    [9, 0, 5, 3]
]

export default function multiply(matrix: number[][]): number[][] {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (i % 2 === 0 && matrix[i][j] % 2 === 0) {
                matrix[i][j] *= 2
            } else if
                (i % 2 === 1 && matrix[i][j] % 2 === 1) {
                matrix[i][j] *= 2
            }
        }
    }
    return matrix
}
