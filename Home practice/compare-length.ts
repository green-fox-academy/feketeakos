'use strict';
// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log "p2 is longer" to the console if `secondList` has more elements than `firstList`

let firstList: number[] = [1, 2, 3];
let secondList: number[] = [4, 5, 6];

function compare(firstList, secondList): string {
    if (firstList.length > secondList.length) {
        return 'First list is longer.'
    }
    if (firstList.length == secondList.length) {
        return 'The lists are equal.'
    } else {
        return 'Second list is longer.'
    }
}
console.log(compare(firstList, secondList));