'use strict';

const fs = require('fs')
export = {};
declare function require(path: string): any;

let path: string = 'my-file.txt';
let word: string = 'apple\n';
let lines: number = 5;

function copy(path: string, word: string, lineNumber: number) {
    for (let i: number = 1; i <= lineNumber; i++) {
        fs.appendFileSync(path, word);
    }
};
copy(path, word, lines);