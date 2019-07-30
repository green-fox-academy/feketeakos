'use strict';
const fs = require('fs');

let fileContent = fs.readFileSync('countchar.txt', 'utf-8');
let charArray: string[] = Array.from(fileContent)
let object = {};
//adding new object: object['akos'] = 100;
//list keys: Object.keys(object);
// console.log(object['a'])

function readFile(filename: string)
try {
    fileContent = fs.readFileSync('countchar.txt', 'utf-8');
    charArray: string[] = Array.from(fileContent)

}
catch (e) {
    console.log('The file does not exist.');
}
return content 
}
function countChar(content: string[]): object {
    let charArray = Array.from(fileContent);
    content = charArray.split('').join('').toLowerCase() 
    let counted: object = {};
    for (let i: number = 0; i <= charArray.length; i++) {
        let currentChar: string = charArray[i];
        if (!counted[currentChar]) {
            counted[currentChar] = 1;
        } else {
            counted[currentChar] = counted[currentChar] + 1
        }
        return counted
    }
}