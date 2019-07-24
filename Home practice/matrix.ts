// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
'use strict';
let numberOfrows = 4
let numberOflines = numberOfrows

let matrix: number[][] = []

for (let i = 0; i < numberOfrows; i++) {
    let firstdim: number[] = [];
    for (let j = 0; j < numberOfrows; j++) {
        if (i + j === numberOfrows - 1) {
            firstdim.push(1);
        }
        else {
            firstdim.push(0);
        }
    }
    matrix.push(firstdim);
}

matrix.forEach((firstdim) => console.log(firstdim.join(" ")));