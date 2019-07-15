'use strict';

class Flower {
    color: string
    waterAmount: number;
    needsWater: boolean;


    constructor(color: string, waterAmount?: number, needsWater?: boolean) {
        this.color = color;
        this.waterAmount = waterAmount;
        this.needsWater = needsWater;
    }
    function(needsWater): boolean {
        if (this.waterAmount < 5) {
            return true
        } else {
            return false
        }
    }
}

const flower1 = new Flower('yellow', 0);
const flower2 = new Flower('blue', 0);

export default Flower;