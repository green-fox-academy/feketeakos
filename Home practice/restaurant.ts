'use strict';
import Employees from './employees'
import Waiter from './waiter'

class Restaurant {
    name: string;
    yearFounded: number;
    employees: string[];

    constructor(name: string, yearFounded: number, employees: string[]) {
        this.name = name;
        this.yearFounded = yearFounded;
        this.employees = employees;
    }

    guestsArrived(): void {
       Waiter.work()
    }
}