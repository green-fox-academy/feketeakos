'use strict';
let code = [];
let DOW = [];

DOW.push('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');
let DOWRandom = DOW[Math.floor(Math.random() * DOW.length)];

code.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
let tempString = []
function randomize() {
    for (let i: number = 0; i <= 8; i++) {
        code = code[(Math.floor(Math.random() * code.length))];
        tempString.push(code);
    }
}
console.log(DOWRandom);
console.log(tempString);