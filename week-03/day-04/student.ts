'use strict';
import {Teacher} from './teacher'

class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    learn() {
        return console.log(this.name + ' is learning something new.')
    }
    question(teacher: Teacher): void {
        teacher.answer();
    }
}
export { Student };

let student1 = new Student('Pistike');
let student2 = new Student('Marika');
let student3 = new Student('Dorka');

let teacher1 = new Teacher('Ákos bácsi')

student1.learn();
student2.learn();
student3.learn();

teacher1.teach(student2);


student1.question(teacher1);
student2.question(teacher1);