'use strict';

export = {};

let person: any = {
    name: 'John',
    age: 21,
    friends: [],
    greeting: function() {
        console.log('Hi, my name is John;)');
    },
    plsDontHateMe: {
        name: 'Akos'

    }
};
console.log(person.plsDontHateMe.name);

console.log(Object.keys(person));

person.greeting();