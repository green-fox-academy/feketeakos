'use strict'

let abc: string[] = ["Arthur", "Boe", "Chloe"];
abc[3] = abc[0]
abc[0] = abc[2];
abc.splice(2, 1)
console.log(abc);