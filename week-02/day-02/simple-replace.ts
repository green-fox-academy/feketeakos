'use strict';

let gal = /dishwasher/gi;
let example: string = 'In a dishwasher far far away';
let newstr = example.replace(gal, "galaxy");

console.log(newstr);