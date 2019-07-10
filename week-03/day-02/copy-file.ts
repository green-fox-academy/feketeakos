'use strict';
const fs = require('fs')
export = {};
declare function require(path: string): any;

let source: string = 'my-file.txt';
let destination: string = 'my-new-file.txt';

function copyFile(fileNameFrom: string, fileNameTo: string): boolean {
  try {
      let cacheString: string = fs.readFileSync(fileNameFrom, 'utf-8');
      fs.appendFileSync(fileNameTo, cacheString);
      return true;
  }
  catch (e) {
      return false;
  }
}

console.log(copyFile(source, destination));