'use strict';
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];

abc.push(abc[0])
abc[0] = abc[2];
abc.splice(2, 1)
console.log(abc);