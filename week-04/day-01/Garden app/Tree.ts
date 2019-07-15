'use strict';

class Tree {
    color: string;
    waterAmount: number;
    needsWater: boolean;

    constructor(color: string, waterAmount?: number, needsWater?: boolean) {
        this.color = color;
        this.waterAmount = waterAmount;
        this.needsWater = needsWater;
    }
    function(needsWater): boolean {
        if (this.waterAmount < 10) {
            return true
        } else {
            return false
        }
    }
}

let tree1 = new Tree('purple', 0);
let tree2 = new Tree('orange', 0);

export default Tree