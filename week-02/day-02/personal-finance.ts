'use script';

let expenses: number[] = [500, 1000, 1250, 175, 800, 120]
let sumArray = function () {
    for (
        var
        index = 0,              // The iterator
        length = expenses.length,  // Cache the array length
        sum = 0;                // The total amount
        index < length;         // The "for"-loop condition
        sum += expenses[index++]   // Add number on each iteration
    );
    return sum;
}
console.log("Total spent: "+sumArray());

expenses.sort(function(a, b){return b-a});
console.log("Greatest expense: "+expenses[0]);

expenses.sort(function(a, b){return a-b});
console.log("Cheapest spending: "+expenses[0]);

let average = sumArray() / expenses.length;
console.log("Average amount of spendings: "+average);