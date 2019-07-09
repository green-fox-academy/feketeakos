'use strict';

const fs = require('fs');

try{
  let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
  let lines: string[] = fileContent.split('\n');
  console.log(lines.length);
  
  }
  catch(e) {
    console.log('0');
  }
