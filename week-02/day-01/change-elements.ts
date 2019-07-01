'use strict';

//let numlist: number [] = [1, 2, 3, 8, 5, 6];
/*numlist.forEach(function(item, i) {
    if (item == 8) numlist[i] = 4;
});
console.log(numlist[3]);
*/
let numList: number [] = [1, 2, 3, 8, 5, 6].map(function (i) {
    if (i == 8) {
        return i = 4;
    }
    else {
        return i
    }
})
console.log(numList);
