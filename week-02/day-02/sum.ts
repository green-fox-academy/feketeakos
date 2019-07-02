'use strict';

let input: number = 8;
let sum = function(input) {
    for (let i: number = 0; i < input; i++) {
        sum += input*i
        return sum;
}}
console.log(sum(input));