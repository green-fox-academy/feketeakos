'use strict';
import Student from './student';
import Mentor from './mentor';


class Cohort {
    name: string;
    students: Student[];
    mentors: Mentor[];

    constructor(name: string, students: Student[] = [], mentors: Mentor[] = []) {
        this.name = name;
        this.students = students;
        this.mentors = mentors;
    }
    addStudent(Student: Student): void {
        this.students.push(Student);
    }
    addMentor(Mentor: Mentor): void {
        this.mentors.push(Mentor);
    }
    info() {
        return `The name ${this.name} has ${this.students.length} students and ${this.mentors.length} mentors.`
    }
}
export default Cohort