'use strict';
import Animals from './animals';

export default class Cat extends Animals {
    
    constructor(name: string, isHealthy: boolean, ownerName?: string) {
        super(name, isHealthy, Math.floor(Math.random() * (6 - 0)) + 0, ownerName)
    }
}
let cat: Cat = new Cat('Mici', false);
console.log(cat.toString());