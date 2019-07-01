'use strict';
let ai: number[] = [3, 4, 5, 6, 7];
let total = 0;
for(let i: number = 0; i < ai.length; i++){
total = total + ai[i];}
console.log(total)

/*let total = ai.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
console.log(total);
*/