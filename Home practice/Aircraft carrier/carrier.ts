'use strict';

import { Aircraft } from "./aircraft";

export class Carrier {
    aircrafts: Aircraft[];
    ammoStorage: number;
    HP: number;

    constructor(ammoStorage: number, HP: number) {
        this.ammoStorage = ammoStorage;
        this.HP = HP;
        this.aircrafts = [];
    }

    add(myAircraft: Aircraft): void {
        this.aircrafts.push(myAircraft)
    }


    fill(): void {
        for (let i: number = 0; i < this.aircrafts.length; i++) {
            let current: Aircraft = this.aircrafts[i];
            if (current.isPriority() === true) {
                this.ammoStorage = current.refill(this.ammoStorage);
            }
        }
        for (let i: number = 0; i < this.aircrafts.length; i++) {
            let current: Aircraft = this.aircrafts[i];
            this.ammoStorage = current.refill(this.ammoStorage);
        }
    }

    fight(enemy: Carrier): void {
       this.aircrafts.forEach(function(oneAircraft) {
           enemy.HP -= oneAircraft.fight();
       })
    }
}