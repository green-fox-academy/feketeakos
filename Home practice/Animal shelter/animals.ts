'use strict';

export default class Animals {
    name: string;
    isHealthy: boolean;
    healCost: number;
    ownerName: string;


    constructor(name: string, isHealthy: boolean, healCost: number, ownerName: string) {
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
