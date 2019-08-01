'use strict';
import Characters from './characters'
import { Stats } from 'fs';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export default class Hero extends Characters {

    constructor
        (XPos: number,
            YPos: number,
            maxHP: number = 10,
            currentHP: number = 20 + 3 * Math.floor(Math.random() * (6 - 1) ) + 1,
            maxDP: number = 10,
            currentDP: number = 2 * Math.floor(Math.random() * (6 - 1) ) + 1,
            maxSP: number = 10,
            currentSP: number = 5 + Math.floor(Math.random() * (6 - 1) ) + 1,
            X?: number,
            d6?: number) {
        super(maxHP, currentHP, maxDP, currentDP, maxSP, currentSP, XPos, YPos, X, d6)

    }

    drawHero(XPos: number, YPos: number) {
        let image = document.getElementById('hero-down') as HTMLImageElement;
        ctx.drawImage(image, XPos * 72, YPos * 72);
    }
    moveHeroD(XPos: number, YPos: number) {
        let image = document.getElementById('hero-down') as HTMLImageElement;
        ctx.drawImage(image, XPos * 72, YPos * 72);
    }
    moveHeroR(XPos: number, YPos: number) {
        let image = document.getElementById('hero-right') as HTMLImageElement;
        ctx.drawImage(image, XPos * 72, YPos * 72);
    }
    moveHeroL(XPos: number, YPos: number) {
        let image = document.getElementById('hero-left') as HTMLImageElement;
        ctx.drawImage(image, XPos * 72, YPos * 72);
    }
    moveHeroU(XPos: number, YPos: number) {
        let image = document.getElementById('hero-up') as HTMLImageElement;
        ctx.drawImage(image, XPos * 72, YPos * 72);
    }

    statsHero() {
        ctx.font = '25px bold Arial'
        ctx.fillStyle = 'black'
        ctx.fillText(
      `Hero (Level ${1})   HP: ${this.currentHP}/${this.maxHP} | DP: ${this.currentDP} | SP: ${this.currentSP}`, canvas.width/5, 750)
    }
}
