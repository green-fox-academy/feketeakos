'use strict';

abstract class Instrument {
    protected name: string;
    abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
    protected numberOfStrings: number;
    abstract sound(): string;
}

class ElectricGuitar extends StringedInstrument {
    name: string;
    numberOfStrings: number;
    sound(): string {
        return 'Twang';
    }
    play() {
        console.log(this.sound());
    };


    constructor(numberOfStrings: number = 6, name?: string) {
        super();
        this.name = name;
        this.numberOfStrings = numberOfStrings;
    }
}

class BassGuitar extends StringedInstrument {
    name: string;
    numberOfStrings: number;
    sound(): string {
        return 'Dumm-dumm-dumm';
    }
    play() {
        console.log(this.sound());
    };


    constructor(numberOfStrings: number = 5, name?: string) {
        super();
        this.name = name;
        this.numberOfStrings = numberOfStrings;
    }
}

class Violin extends StringedInstrument {
    name: string;
    numberOfStrings: number;
    sound(): string {
        return 'Screech';
    }
    play() {
        console.log(this.sound());
    };


    constructor(numberOfStrings: number = 4, name?: string) {
        super();
        this.name = name;
        this.numberOfStrings = numberOfStrings;
    }
}

export { ElectricGuitar, BassGuitar, Violin }
