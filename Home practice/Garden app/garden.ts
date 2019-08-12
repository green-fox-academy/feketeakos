'use strict';

import Plants from './plants';
import Flower from './flower';
import Tree from './tree';

export default class Garden {
    plants: Plants[];

    constructor() {
        this.plants = [];
    }
    plantAdder() {
        this.plants.push(new Flower('yellow', 6));
        this.plants.push(new Flower('blue', 2));
        this.plants.push(new Tree('purple', 10));
        this.plants.push(new Tree('orange', 8));
    }



    watering(amount) {
        console.log(`Watering with ${amount}.`);
        let howManyNeedWater: number = 0;
        this.plants.forEach((element: Plants) => {
            if (element.needsWater()) {
                howManyNeedWater++;
            }
        });

        if (howManyNeedWater != 0) {
            this.plants.forEach((element: Plants) => {
                if (element.needsWater()) {
                    element.getWatered(amount / howManyNeedWater);
                }
            });
        }
        this.getWaterInfo()
    }
    getWaterInfo() {
        this.plants.forEach((element: Plants) => {
            if (element.needsWater()) {
                console.log(`The ${element.color} ${element.constructor.name} needs water.`);
            }
            else {
                console.log(`The ${element.color} ${element.constructor.name} doesn't need water.`);
            }
        })
    }
}
