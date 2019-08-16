'use strict';

const fs = require('fs');

function getRainyDays(fileName: string) {
    let fileContent = fs.readFileSync(fileName, 'utf-8');
    let split: string[] = fileContent.split('\r\n');
    let removed: string[] = [];
    let removed2: string[] = [];
    for (let i: number = 0; i < split.length; i++) {
        if (split[i].endsWith('RAINY')) {
            removed.push(split[i]);
        }
    }return removed.toString().split(',')
}

console.log(getRainyDays('cities.txt'))
