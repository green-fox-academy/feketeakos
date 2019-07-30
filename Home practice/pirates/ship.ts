'use strict';

import Pirate from './pirates'

export default class Ship {
    crew: Pirate[];

    constructor(crew: Pirate[] = []) {
        this.crew = []
    }

    addPirate(newPirate: Pirate): void {
        if (newPirate.captain === false) {
            this.crew.push(newPirate);
        } else if (newPirate.captain === true && this.checkCaptain() === false) {
            this.crew.push(newPirate);
        }
    }

    checkCaptain(): boolean {
        let hasCaptain: boolean = false;
        for (let i = 0; i < this.crew.length; i++) {
            let crewMemeber: Pirate = this.crew[i];
            if (crewMemeber.captain === true) {
                hasCaptain = true;
            }
        }
        return hasCaptain
    }

    getPoorPirates(): string[] {
        let poorGuys: string[] = [];
        for (let i = 0; i < this.crew.length; i++) {
            let crewMember: Pirate = this.crew[i];
            if (crewMember.goldAmount <= 15 && crewMember.hasWoodenLeg === true) {
                poorGuys.push(crewMember.name);
            }
            return poorGuys;
        }
    }
    getGold(): number {
        let sum: number = 0;
        for (let i = 0; i < this.crew.length; i++) {
            let crewMember: Pirate = this.crew[i];
            sum += crewMember.goldAmount;
        }
        return sum
    }
    lastDayOnShip(): void {
        for (let i = 0; i < this.crew.length; i++) {
            let crewMember: Pirate = this.crew[i];
            crewMember.party()
        }
    }
    prepareForBattle(): void {
        for (let i = 0; i < this.crew.length; i++) {
            let crewMember: Pirate = this.crew[i];
            for (let j = 0; j < 5; j++) {
                crewMember.work();
            }
        }
        this.lastDayOnShip();
    }
}
let pearl = new Ship();
let pirate = new Pirate('Jack', false, false, 300, 5);
let captain = new Pirate('Joe', true, false, 500, 10);

pearl.addPirate(pirate);
pearl.addPirate(captain);
