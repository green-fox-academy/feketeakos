'use strict';

let input: number = 5
let factorio = function (input) {
    let rval = 1;
    for (let i = 2; i <= input; i++)
        rval = rval * i;
    return rval;
}
console.log(factorio(input));