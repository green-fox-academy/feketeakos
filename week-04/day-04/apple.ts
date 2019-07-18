'use strict';

export default class Apple {
    name: string;

    constructor(name: string = 'apple') {
        this.name = name;
    }

    getApple(): string {
        return this.name
    }

}