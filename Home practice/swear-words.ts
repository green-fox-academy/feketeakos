'use strict';

const fs = require('fs');

let wordsToSearch: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
let searchDatabase: string = wordsToSearch.join()
let fileContent = fs.readFileSync('swear-words.txt', 'utf-8');
let wordArray: string[] = fileContent.toLowerCase().split(' ');

let result = wordArray.filter(f => wordsToSearch.includes(f));
console.log(result);
console.log(result.length);