'use strict';
import { Car } from './car'

class Station {
    gasAmount: number;


    constructor(gasAmount: number = 10000) {
        this.gasAmount = gasAmount;

    }

    refill(car: Car): any {
        this.gasAmount = this.gasAmount - (car.capacity - car.gasAmount);
        car.gasAmount = car.capacity;
    }
    countPetrolFilled(car: Car): any {
        return car.capacity - car.gasAmount
    }
}

let LUKOIL = new Station()

let IFA = new Car(5, 100);
let Tesla = new Car(0, 0);
let Kama3 = new Car(50, 80);

console.log('Petrol filled:' , LUKOIL.countPetrolFilled(IFA));
LUKOIL.refill(IFA);
console.log(IFA);
console.log(LUKOIL);


console.log('Petrol filled:' , LUKOIL.countPetrolFilled(Tesla));
LUKOIL.refill(Tesla);
console.log(Tesla);
console.log(LUKOIL);


console.log('Petrol filled:' , LUKOIL.countPetrolFilled(Kama3));
LUKOIL.refill(Kama3);
console.log(Kama3);
console.log(LUKOIL)