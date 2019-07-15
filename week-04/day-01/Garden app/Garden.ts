'use strict';
import Flower from './Flower';
import Tree from './Tree';
import Plant from './Plant';

class Garden extends Plant {
    plants: Plant[];

    constructor(plants?: Plant[]) {
        { super(color, waterAmount) }
        this.plants = [];
        {

        }
    }
}
let myGarden = [];
let flower1 = new Flower('yellow', 0);
let flower2 = new Flower('blue', 0);
let tree1 = new Tree('purple', 0);
let tree2 = new Tree('orange', 0);

myGarden.push(flower1, flower2, tree1, tree2)

for (let i = 0; i < myGarden.length; i++) {
    if (myGarden[i].needsWater() == true) {
        waterAmount = waterAmount + 40
    }
}
