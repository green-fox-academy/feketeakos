'use strict';

class Animal {
    hunger: number;
    thirst: number;

    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }
    public eat(): number {
        return this.hunger = this.hunger - 1;
    }
    public drink(): number {
        return this.thirst = this.thirst - 1;
    }
    public play(): void {
        this.hunger = this.hunger + 1;
        this.thirst = this.thirst + 1;
    }
}
let dog = new Animal();
dog.eat();
dog.drink();


console.log(dog);



