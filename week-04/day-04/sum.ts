'use strict';

export default class AddNumbers {
    integers: number[] = []

    constructor(integers: number[] = []) {
        this.integers = integers
    }

    sumMethod(): number {
        return this.integers.reduce((a: number, b: number) => a + b)
    }
}
