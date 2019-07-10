'use strict';

class Counter {
    integer: number;
    initial: number;

    constructor(integer: number = 0) {
        this.integer = integer;
        this.initial = 0;
    }
    add(num: number = 1): void {
        this.integer += num;
    }
    addOne(num: number = 1): number {
        return this.integer += num;
    }
    get(): string {
        return this.integer.toString();
    }
    reset(): void {
        this.integer = 0;
    }
}
let firstNumber = new Counter();
let secondNumber = new Counter(20);

console.log(firstNumber);
console.log(secondNumber);

secondNumber.addOne();
console.log(secondNumber);

secondNumber.add(8);
console.log(secondNumber);

secondNumber.reset();
console.log(secondNumber);