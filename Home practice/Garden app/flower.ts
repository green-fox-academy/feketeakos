'use strict';

import Plants from './plants';

export default class Flower extends Plants {
    constructor(color: string, waterAmount: number) {
        super(color, waterAmount);
        this.needsWaterParam = 5;
        this.absorbRate = 75/100;
    }
}