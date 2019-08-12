'use strict';

export default class Plants {
    color: string;
    waterAmount: number = 0;
    absorbRate: number;
    needsWaterParam: number;

    constructor(color: string, waterAmount: number) {
        this.color = color;
        this.waterAmount = waterAmount;
    }

    needsWater(): boolean {
        return (this.waterAmount > this.needsWaterParam ? false : true);
    }

    getWatered(amount: number): void {
        this.waterAmount += amount * this.absorbRate
    }
}
