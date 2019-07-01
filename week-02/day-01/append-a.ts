'use strict';

let animals: string[] = ["koal", "pand", "zebr"];
animals.forEach(plusAFunction)
function plusAFunction(item, index, arr) {
    arr[index] = item + "a"
}
console.log(animals);