'use strict';

export default class Animals {
    name: string;
    ownerName: string;
    isHealthy: boolean;
    healCost: number;

    constructor(name: string, isHealthy: boolean, healCost: number, ownerName?: string, ) {
        this.name = name;
        this.isHealthy = isHealthy;
        this.healCost = healCost;
        this.ownerName = ownerName;
    }

    heal(): void {
        this.isHealthy = true
    }

    isAdoptable(): boolean {
        return this.isHealthy
    }

    toString(): string {
        if (this.isHealthy === true) {
            return `${this.name} is healthy and adoptable.`
        } else {
            return `${this.name} is not healthy (healing cost: ${this.healCost} EUR) and not adoptable.`
        }
    }
}
let cat: Animals = new Animals('Mici', false, Math.floor(Math.random() * (6 - 1) ) + 1, 'Feribá');
console.log(cat.toString())
