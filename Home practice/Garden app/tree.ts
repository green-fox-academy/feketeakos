'use strict';

import Plants from './plants';

export default class Tree extends Plants {
    constructor(color: string, waterAmount: number) {
        super(color, waterAmount);
        this.needsWaterParam = 10;
        this.absorbRate = 4/10;
    }
}
