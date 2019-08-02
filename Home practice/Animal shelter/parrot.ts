'use strict';
import Animals from './animals';

class Parrot extends Animals {
    
    constructor(name: string, isHealthy: boolean, ownerName?: string) {
        super(name, isHealthy, Math.floor(Math.random() * (10 - 4)) + 4, ownerName)
    }
}
let parrot: Parrot = new Parrot('Gyuri', true, 'Feribá');
console.log(parrot.toString());
