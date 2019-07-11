'use strict';

import { Student } from './student'

class Teacher {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    teach(student: Student): void {
        student.learn();
    }

    answer(): void {
        console.log(this.name + ' is answering a question.');
    }
}

export { Teacher };