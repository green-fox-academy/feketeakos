'use strict';
let number: number = 5674356;
let array = number.toString().split('').map(Number);

console.log(array.reduce((a, b) => a + b));


//Another solution:
function sumDigits(num: number): number {
    if (num / 10 <= 1) {
      return num;
    } else {
      return (num % 10) + sumDigits((num - (num % 10)) / 10);
    }
  }
  
  console.log(sumDigits(5674356));