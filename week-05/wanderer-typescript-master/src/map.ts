'use strict';

import Hero from "./hero";
let hero: Hero = new Hero(0, 0)
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export default class Map {
    map: number[][] = []

    constructor(map: number [][]) {
        this.map = map
    }
}



