'use script';

let matrix: number[][] = [
    [1, 2, 3],
    [2, 2, 1],
    [3, 1, 3]
]

function isSymmetric(matrix: number[][]): boolean {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }
    return true
}
console.log(isSymmetric(matrix));