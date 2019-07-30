'use strict';

export default class Pirate {
    name: string;
    goldAmount: number;
    healthPoints: number;
    captain: boolean;
    hasWoodenLeg: boolean;

    constructor(name: string, captain?: boolean, hasWoodenLeg?: boolean, goldAmount: number = 10, healthPoints: number = 10) {
        this.name = name;
        this.captain = captain;
        this.hasWoodenLeg = hasWoodenLeg;
        this.goldAmount = goldAmount;
        this.healthPoints = healthPoints;
    }


    work(): void {
        if (this.captain) {
            this.goldAmount += 10
            this.healthPoints -= 5
        } else {
            this.goldAmount += 1
            this.healthPoints -= 1
        }
    }


        party(): void {
            if(this.captain) {
            this.healthPoints += 10;
        } else {
            this.healthPoints += 1;
        }
    }

        toString(): string {
        if (this.hasWoodenLeg) {
            return `Hello, I\'m ${this.name}. I have a wooden leg and ${this.goldAmount} golds`
        } else {
            return `Hello, I\'m ${this.name}. I still have my real legs and ${this.goldAmount} golds.`
        }
    }
}
//test:
let pirate: Pirate = new Pirate('Jack', false, false, 300, 5);
let captain: Pirate = new Pirate('Joe', true, false, 500, 10);

pirate.party();
pirate.work();
pirate.toString();

captain.party();
captain.work();
captain.toString();

console.log(pirate);
console.log(pirate.toString());
console.log(captain);
console.log(captain.toString());