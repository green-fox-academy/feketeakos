'use strict';

import Plant from './Plant';

class Flower extends Plant {

    constructor
        (color: string,
            waterAmount: number
        ) {
        super(color, waterAmount)
    }
    needsWater(): boolean {
        if (this.waterAmount < 5) {
            return true
        } else {
            return false
        }
    }
}

export default Flower;