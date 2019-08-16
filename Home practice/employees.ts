'use strict';

export default class Employees {
    name: string;
    experience: number;

    constructor(name: string, experience: number = 0) {
        this.name = name;
        this.experience = experience;
    }


}