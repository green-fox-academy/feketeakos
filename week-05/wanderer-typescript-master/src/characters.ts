'use strict';

import Hero from "./hero";

export default class Characters {
    maxHP: number;
    currentHP: number;
    maxDP: number;
    currentDP: number;
    maxSP: number;
    currentSP: number;
    XPos: number;
    YPos: number;
    X: number = 0;
    d6: number = Math.floor(Math.random() * 10) + 6;

    constructor(maxHP: number,
        currentHP: number,
        maxDP: number,
        currentDP: number,
        maxSP: number,
        currentSP: number,
        XPos: number,
        YPos: number,
        X: number,
        d6: number) {
        this.currentHP = currentHP;
        this.maxHP = maxHP;
        this.currentDP = currentDP;
        this.maxDP = maxDP;
        this.maxSP = maxSP;
        this.currentSP = currentSP;
        this.XPos = XPos;
        this.YPos = YPos;
        this.X = X;
        this.d6 = d6;
    }
}