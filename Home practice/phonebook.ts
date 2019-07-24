'use strict';

import { pathToFileURL } from "url";

let phoneBook = {}

phoneBook['William A. Lathan'] = '405 - 709 - 1865';
phoneBook['John K. Miller'] = '402 - 247 - 8568';
phoneBook['Hortensia E. Foster'] = '606 - 481 - 6467';
phoneBook['Amanda D. Newland'] = '319 - 243 - 5613';
phoneBook['Brooke P. Askew'] = '307 - 687 - 2982';

/*function getNumber(name: string): string {
    return phoneBook[name]
}
console.log(getNumber('William A. Lathan'));*/

function getNumber(phoneBook, name: string): string {
    for (let value in phoneBook)
        if (phoneBook[name] === value) return value;
    return "Name not found";
}

function getName(phoneBook, number: string): string {
    for (let key in phoneBook)
        if (phoneBook[key] === number) return key;
    return "Phone number not found";
}
console.log(getNumber(phoneBook, 'William A. Lathan'));
console.log(getNumber(phoneBook, 'Fekete Ákos'));
console.log(getName(phoneBook, '307 - 687 - 2982'));
console.log(getName(phoneBook, '666 - 666 - 6666'));