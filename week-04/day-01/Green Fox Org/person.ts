'use strict';

class Person {

    name: string;
    age: number;
    gender: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduce() {
        return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`;
    }
    getGoal() {
        return 'My goal is: Live for the moment!';
    }
}
export default Person;