const fs = require('fs');

let fileContent = fs.readFileSync('encoded-lines.txt', 'utf-8');
let split: string[] = fileContent.split('');
let alphabetU: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
let alphabetL = alphabetU.toString().toLowerCase().split(',')

function encode(split): string {
    for (let i: number = 0; i < split.length; i++) {
        for (let j: number = 0; j < alphabetL.length; j++) {
            if (split[i] === alphabetL[j]) {
                split[i] = alphabetL[j - 1]
            } else if(split[i] === alphabetU[j]) {
                split[i] = alphabetU[j - 1]
            }
        }
    }
    return split.join('')
}

console.log(encode(split))