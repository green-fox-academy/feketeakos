'use strict'

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
drinks.forEach(doubleFunction)
function doubleFunction(item, index, arr) {
    arr[index] = item + item
}
console.log(drinks);