'use strict';
const fs = require('fs')
export = {};
declare function require(path: string): any;

let ipAddresses: string[] = [];

let fileContent = fs.readFileSync('log.txt', 'utf-8');

console.log(fileContent);
