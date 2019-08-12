'use strict'
const fs = require('fs');

function reverser(fileName): string {
    let fileContent = fs.readFileSync(`${fileName}.txt`, 'utf-8');
    let split: string[] = fileContent.split('\r');
    let reversed: string[] = []
    for (let i: number = split.length; i > 0; i--)
    reversed.push(split[i])
    return reversed.join(' ')
}

console.log(reverser('reverser'))