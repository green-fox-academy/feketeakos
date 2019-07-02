'use strict';

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(reversed) {
    var newString = "";
    for (var i = reversed.length - 1; i >= 0; i--) {
        newString += reversed[i];
    }
    return newString;
}

console.log(reverse(reversed));