'use strict';

abstract class Animal {
    name: string;
    age: number;
    gender: string;
    height: number;
    abstract getName(): string;
    abstract breed(): string;
    abstract canfly(): boolean;
}

class Mammals extends Animal {
    getName(): string {
        return mammal.name
    };
    breed(): string {
        return 'giving birth to live young.'
    }
    canfly(): boolean {
        return false
    }

    constructor(name: string) {
        super()
        this.name = name
    }

}

class Reptiles extends Animal {
    getName(): string {
        return reptile.name
    }
    breed(): string {
        return 'laying eggs.'
    }
    canfly(): boolean {
        return false
    }
    constructor(name: string) {
        super()
        this.name = name
    }
}

class Birds extends Animal {
    getName(): string {
        return bird.name
    }
    breed(): string {
        return 'laying eggs.'
    }
    canfly(): boolean {
       return true
}

    constructor(name: string) {
        super()
        this.name = name
    }
}

let reptile = new Reptiles("Crocodile");
let mammal = new Mammals("Koala");
let bird = new Birds("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed(),'\n');

console.log("Can you fly?");
console.log('Reptiles: ' + reptile.canfly());
console.log('Mammals: ' + mammal.canfly());
console.log('Birds: ' + bird.canfly());