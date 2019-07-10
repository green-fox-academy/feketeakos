'use strict';

class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number, inkAmount: number = 100) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }
    use(): number {
        return this.inkAmount = this.inkAmount - 100;
    }
}

let sharpie1 = new Sharpie('red', 200);
let sharpie2 = new Sharpie('blue', 300);
let sharpie3 = new Sharpie('green', 100);

sharpie1.use();
sharpie3.use();

console.log(sharpie1);
console.log(sharpie2);
console.log(sharpie3);

