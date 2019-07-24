// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

'use strict';

let ai: number[] = [3, 4, 5, 6, 7]

function sumArray(array) {
    for (
        var
        index = 0,
        sum = 0;
        index < array.length;
        sum += array[index++]
    );
    return sum;
}

console.log(sumArray(ai));

