'use strict';

function earCounter(numberOfBunnies: number) {
    if (numberOfBunnies < 1) {
        return numberOfBunnies
    } else {
        return 2 + earCounter(numberOfBunnies - 1);
    }
}
console.log(earCounter(3));