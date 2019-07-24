'use strict';

let code = [];
let DOW = [];

DOW.push('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');
code.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')

let DOWRandom = ''
let codeRandom = ''

for (let i: number = 0; i <= 7; i++) {
    for (let i: number = 0; i <= 7; i++) {
        codeRandom += code[Math.floor(Math.random() * code.length)]
        DOWRandom = DOW[Math.floor(Math.random() * DOW.length)]
    }
    console.log('Booking# ' + codeRandom + ' for ' + DOWRandom);
    codeRandom = ''
    DOWRandom = ''
}
