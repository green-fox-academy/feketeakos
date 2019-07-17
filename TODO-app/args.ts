'use strict';

import { listeners } from "cluster";
import { parse } from "querystring";

export = {};
declare function require(path: string): any;

const fs = require('fs');

let argList: string[] = process.argv

let list = fs.readFileSync('list.txt', 'utf-8');
let lines: string[] = list.split('\n');

if (argList.length === 2) {
    console.log(`$ todo

    Command Line Todo application
    =============================
    
    Command line arguments:
        -l   Lists all the tasks
        -a   Adds a new task
        -r   Removes an task
        -c   Completes a task`)

    //empty list:
} else if (argList[2] === '-l' && list.length == 0) {
    console.log('No todos for today! :)');

    //add order numbers and logging to do list:
} else if (argList[2] === '-l' && lines.length > 0) {
    fs.writeFileSync('newlist.txt', '');
    for (let i = 1; i <= lines.length; i++) {
        fs.appendFileSync('newlist.txt', i + ' - ' + lines[i - 1] + '\n')
    }
    let newlist = fs.readFileSync('newlist.txt', 'utf-8');
    console.log(newlist);


    //add new task:
} else if (argList[2] === '-a') {
    argList.push(argList[3]);
    fs.appendFileSync('list.txt', '\n' + argList[3]);


    //remove task:
} else if (argList[2] === '-r' && lines.length >= 2) {
    let splicePos: number = parseInt(argList[3])
    lines.splice(splicePos-1,1);
    fs.writeFileSync('list.txt', lines);
} 