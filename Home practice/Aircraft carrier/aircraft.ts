'use strict';

import { Carrier } from './carrier'

export class Aircraft {
    type: string;
    currentAmmo: number;
    MaxAmmo: number;
    BaseDamage: number;


    constructor(type: string, MaxAmmo: number, BaseDamage: number) {
        this.type = type;
        this.MaxAmmo = MaxAmmo;
        this.BaseDamage = BaseDamage;
        this.currentAmmo = 0;
    }

    fight(): number {
        let damage: number = this.BaseDamage * this.currentAmmo;
        this.currentAmmo = 0;
        return damage;
    }

    refill(ammo: number): number {
        let neededAmmo: number = this.MaxAmmo - this.currentAmmo
        let remainingAmmo: number = 0;
        if (ammo >= neededAmmo) {
            this.currentAmmo = this.MaxAmmo;
            remainingAmmo = ammo - neededAmmo;
        } else {
            this.currentAmmo += ammo;
            remainingAmmo = 0;
        }
        return remainingAmmo
    }

    getType(): string {
        return this.type
    }

    getStatus(): string {
        return `Type ${this.type}, Ammo: ${this.currentAmmo}, Total damage: ${this.currentAmmo * this.BaseDamage}`;
    }

    isPriority(): boolean {
        return this.type === 'F35';
    }
}