'use strict';

import Plant from './Plant';

class Tree extends Plant {

    constructor
        (color: string,
            waterAmount: number,
    ) {
        super(color, waterAmount)
    }
    needsWater(): boolean {
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