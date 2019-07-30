'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export default class Hero {
    HP: number;
    DP: number;
    SP: number;
    XPos: number;
    YPos: number;

    constructor(HP?: number, DP?: number, SP?: number, XPos: number = 0, YPos: number = 0) {
        this.HP = HP;
        this.DP = DP;
        this.SP = SP;
        this.XPos = XPos;
        this.YPos = YPos;
    }
    drawHero(XPos: number, YPos: number) {
        let image = document.getElementById('hero-down') as HTMLImageElement;
        ctx.drawImage(image, XPos*72, YPos*72);
    }
    moveHeroD(XPos: number, YPos: number) {
        let image = document.getElementById('hero-down') as HTMLImageElement;
        ctx.drawImage(image, XPos*72, YPos*72);
    }
    moveHeroR(XPos: number, YPos: number) {
        let image = document.getElementById('hero-right') as HTMLImageElement;
        console.log(XPos)
        ctx.drawImage(image, XPos*72, YPos*72);
    }
    moveHeroL(XPos: number, YPos: number) {
        let image = document.getElementById('hero-left') as HTMLImageElement;
        ctx.drawImage(image, XPos*72, YPos*72);
    }
    moveHeroU(XPos: number, YPos: number) {
        let image = document.getElementById('hero-up') as HTMLImageElement;
        ctx.drawImage(image, XPos*72, YPos*72);
    }
}
