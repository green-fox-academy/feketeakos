'use strict';

import Employees from "./employees";

export default class Waiter extends Employees {
    tips: number;

    constructor(name: string, experience: number, tips: number = 0) {
        super(name, experience)
        this.tips = tips
    }

    work(): void {
        this.experience++;
        this.tips++;
    }

}