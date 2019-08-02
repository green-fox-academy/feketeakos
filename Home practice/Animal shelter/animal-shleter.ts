'use strict';
import Animals from './animals'
import Cat from './cat'

class AnimalShelter {
    budget: number;
    animals: Animals[];

    constructor(budget: number = 50, animals: Animals[]) {
        this.budget = budget;
        this.animals = animals;
    }
    rescue(animals: Animals): number {
        this.animals.push(animals);
        return this.animals.length
    }
    heal() {

    }
}

let illatosut: AnimalShelter = new AnimalShelter(50, []);
console.log(illatosut.rescue());