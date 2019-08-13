const fs = require('fs');

function getIP(filename) {
    let fileContent = fs.readFileSync(filename, 'utf-8');
    let split: string[] = fileContent.toString().split('  ')
    let ipArray: string[] = [];
    for (let i: number = 2; i < split.length; i += 3) {
        ipArray.push(split[i])
    }
    let unique = Array.from(new Set(ipArray))
    return unique
}

function getRatio(filename) {
    let fileContent = fs.readFileSync(filename, 'utf-8');
    let split: string[] = fileContent.split('\r\n')
    let postCounter: number = 0;
    let getCounter: number = 0;
    for (let i: number = 0; i < split.length; i++) {
        split[i] = split[i].slice(-5, -2)
        if (split[i] === 'GET') {
            getCounter++
        } else {
            postCounter++
        }
    } return getCounter/postCounter
}

console.log(getIP('log.txt'))
console.log(getRatio('log.txt'))