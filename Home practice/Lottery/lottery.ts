'use strict';

const fs = require('fs');
let fileContent = fs.readFileSync('lottery.txt', 'utf-8');
let split: string[] = fileContent.split('\r\n')
let numbers: string[] = []

let filteredArr = []
for (let i: number = 0; i < split.length; i++) {
    filteredArr.push(split[i].split(';'));
    /* filteredArr.slice(-5,filteredArr.length) */
}
let lotteryNumbers: string [] = []
for (let i: number = 0; i < split.length; i++) {
    lotteryNumbers.push(filteredArr[i].slice(-5, filteredArr.length));
}
let count: Map<string,number> = new Map();
for (let i: number = 0; i < lotteryNumbers.length; i++) {
    for (let j: number = 0; j < lotteryNumbers.length; j++) {
        if(count.has(lotteryNumbers[i][j])) {
            count.set(lotteryNumbers[i][j], count.get(lotteryNumbers[i][j])+1)
        } else {
            count.set(lotteryNumbers[i][j], 1)
        }
    }
}
let fiveMostCommon: object = {};
for (let i = 0; i < 5; i++) {
 let maxCount: number = 0;
 let lotteryNumberForMaxCount: number = null;
 count.forEach((count, lotteryNumber) => {
   if (count > maxCount /* && fiveMostCommon[lotteryNumber] === undefined */) {
     maxCount = count;
     lotteryNumberForMaxCount = lotteryNumber;
   }
 });
 fiveMostCommon[lotteryNumberForMaxCount] = maxCount;
 count.delete(lotteryNumberForMaxCount);
}
console.log(fiveMostCommon);