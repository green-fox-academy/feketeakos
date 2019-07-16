'use strict';
import Flower from './Flower';
import Tree from './Tree';
import Plant from './Plant';

class Garden extends Plant {
    plants: Plant[];

    constructor(color: string,
        waterAmount: number
    ) {
        super(color, waterAmount)
        this.color = color;
        this.waterAmount = waterAmount;
    }
}

let myGarden = [];
let flower1 = new Flower('yellow', 10);
let flower2 = new Flower('blue', 3);
let tree1 = new Tree('purple', 8);
let tree2 = new Tree('orange', 50);

myGarden.push(flower1, flower2, tree1, tree2)

for (let i = 0; i < myGarden.length; i++) {
    if (myGarden[i].needsWater() == true) {
        this.waterAmount = this.waterAmount + 40
        console.log('Watering with 40\n')
        console.log(`The ${this.color} ${this.Flower} needs water.`)
        console.log(`The ${this.color} ${this.Tree} needs water.`)
    }
    water40(
    for (let i = 0; i < myGarden.length; i++) {
        if (myGarden[i].waterAmount < 45) {
            this.waterAmount = this.waterAmount + 70
            console.log('Watering with 70')
        }
    }
}
}
