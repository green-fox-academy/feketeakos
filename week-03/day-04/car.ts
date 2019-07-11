'use strict';

class Car {
    gasAmount: number;
    capacity: number;
    petrolFilled: number

    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }

}

export { Car };