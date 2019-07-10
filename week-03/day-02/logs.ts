'use strict';
const fs = require('fs')
export = {};
declare function require(path: string): any;

function readLogFile(filename: string): string {
    try {
        fs.readLogFileSync(filename, 'utf-8');
    } catch (error) {
        return 'error!';
    }
}
let fileContent: string = readLogFile('log.txt');

function createLinesBasedOnTextContent(fileContent: string){
return fileContent.split('\n');
}
function getIPAddressOfLine(line: string): string {
    return line.split('    ')[1];
}
let IPAddresses: string[] = createLinesBasedOnTextContent(fileContent)
.map(function(line) {
    return getIPAddressOfLine(line)
})

let uniqueIPAddresses: string[] = [];

uniqueIPAddresses = IPAddresses.map(function(IPAddress: string) {
    if (!uniqueIPAddresses.includes(IPAddress)) {
        return IPAddress;
    }
})
console.log(uniqueIPAddresses);