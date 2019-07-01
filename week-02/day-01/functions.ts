let numberToMultiply: number = 12;

let twice: number = numberToMultiply;
console.log(twice);

let anothernumberToMultiply: number = 11;
let twiceAnotherone: number = (anothernumberToMultiply * 2);
console.log(twiceAnotherone) ;

function printNumberAndChangeIt (inputNumber: number = 100): void {
let doubledValue: number = inputNumber *2;
console.log(doubledValue);
}
printNumberAndChangeIt();

function multiplication (base: number, another: number): number {
    return base * another;
}
console.log(multiplication(8, 6));


