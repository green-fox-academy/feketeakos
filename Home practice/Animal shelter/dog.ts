'use strict';
import Animals from './animals';

class Dog extends Animals {
    
    constructor(name: string, isHealthy: boolean, ownerName?: string) {
        super(name, isHealthy, Math.floor(Math.random() * (8 - 1)) + 1, ownerName)
    }
}
let dog: Dog = new Dog('Bodri', false, 'Judit');
console.log(dog.toString());

