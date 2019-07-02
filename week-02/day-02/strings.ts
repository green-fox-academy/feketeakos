'use strict';

let single: string = 'single quotes';
let double: string = "double quotes";
let backtick: string = `Today is ${(100 **2) -1}`;

console.log(single, double, backtick);

console.log(single.length);

console.log(double.toUpperCase().toLowerCase());

function toUpperCaseAtIndex(text: string, index: number): string {
    let prefix: string = text.slice(0, index);
    let replaceUppercase: string = text.charAt(index).toUpperCase();
    let suffix: string = text.slice(index + 1);
    return prefix.concat(replaceUppercase).concat(suffix);
}
console.log(toUpperCaseAtIndex("appletree", 5));

let lettersOfWord: string [] = 'hello create class'.split(' ');
console.log(lettersOfWord);

let greeting: string = 'hello create class';
let greetingRightWay: string = greeting.replace(/c/g, 'C');
console.log(greeting);
console.log(greetingRightWay);

let textToSlice: string = '1234910';
let sliced: string = textToSlice.slice(4, -3);
console.log(sliced);