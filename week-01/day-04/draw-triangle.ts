'use strict';

let lineCount: number = 8;
let star: string = '*';

for (let i: number = 1; i <= lineCount; i++) {
    console.log(star);
    (star = star + '*');
}