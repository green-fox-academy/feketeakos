'use strict';

export = {};
declare function require(path: string): any;

const fs = require('fs');
let fileName: string = 'my-file.txt';
let myName: string = '\n\n\n\n\n\n\nFekete Akos';

try {
    let fileContent = fs.readFileSync(fileName, 'utf-8');
    fs.appendFileSync(fileName, myName)
    console.log(fileContent);
}
catch (e) {
    console.error('Unable to read file: my-file.txt');
}